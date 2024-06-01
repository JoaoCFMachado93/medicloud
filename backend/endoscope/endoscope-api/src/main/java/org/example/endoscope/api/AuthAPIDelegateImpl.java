package org.example.endoscope.api;


import lombok.extern.slf4j.Slf4j;
import org.example.endoscope.api.mapper.directory.UserConverter;
import org.example.endoscope.api.openapi.AuthApiDelegate;
import org.example.endoscope.api.openapi.model.UserEntity;
import org.example.endoscope.api.openapi.model.UserLoginRequest;
import org.example.endoscope.api.openapi.model.UserLoginResponse;
import org.example.endoscope.core.domain.User;
import org.example.endoscope.core.driver.AuthServicePort;
import org.example.endoscope.core.service.SpringJwtService;
import org.springframework.http.ResponseEntity;

@Slf4j
public class AuthAPIDelegateImpl implements AuthApiDelegate {

    private final AuthServicePort authServicePort;
    private final SpringJwtService jwtServicePort;
    private final UserConverter userConverter;

    public AuthAPIDelegateImpl(
            AuthServicePort authServicePort,
            SpringJwtService jwtServicePort,
            UserConverter userConverter) {
        this.authServicePort = authServicePort;
        this.jwtServicePort = jwtServicePort;
        this.userConverter = userConverter;
    }

    @Override
    public ResponseEntity<Void> registerUser(UserEntity userEntity) {
        log.info("Register the following user: {}", userEntity.getEmail());
        var userDomain = userConverter.dtoToDomain(userEntity);
        authServicePort.registerUser(userDomain);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<UserLoginResponse> loginUser(UserLoginRequest userLoginRequest) {
        log.info("Login the following user: {}", userLoginRequest.getEmail());

        User user = authServicePort.loginUser(userLoginRequest.getEmail(), userLoginRequest.getPassword());

        var jwtToken = jwtServicePort.generateToken(user);

        UserLoginResponse userLoginResponse = new UserLoginResponse()
                .token(jwtToken)
                .expiration(jwtServicePort.getExpirationTime())
                .email(user.getEmail())
                .name(user.getFullName())
                .role(user.getRole());

        return ResponseEntity.ok(userLoginResponse);
    }
}
