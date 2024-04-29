package org.example.endoscope.core.service;

import org.example.endoscope.core.domain.User;
import org.example.endoscope.core.driven.UserRepositoryPort;
import org.example.endoscope.core.driver.AuthServicePort;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

public class SpringAuthService implements AuthServicePort {

    private final UserRepositoryPort userRepositoryPort;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public SpringAuthService(UserRepositoryPort userRepositoryPort, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepositoryPort = userRepositoryPort;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public void registerUser(User user) {
        if (userRepositoryPort.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User with this email already exists");
        }

        if (!isMedicalIdValid(user.getMedicalId())) {
            throw new IllegalArgumentException("Invalid medical id");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepositoryPort.save(user);
    }

    @Override
    public User loginUser(String email, String password) {
        var user = userRepositoryPort.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        password
                )
        );
        return user;
    }

    private boolean isMedicalIdValid(String medicalId) {
        return true;
    }
}
