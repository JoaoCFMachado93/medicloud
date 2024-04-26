package org.example.endoscope.output.adapter;

import org.example.endoscope.core.domain.User;
import org.example.endoscope.core.driven.UserRepositoryPort;
import org.example.endoscope.output.dbo.UserEntity;
import org.example.endoscope.output.repository.UserJpaRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserRepository implements UserRepositoryPort {

    private final UserJpaRepository userJpaRepository;

    public UserRepository(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public User findByEmail(String email) {
        UserEntity userEntity = userJpaRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return dboToDomain(userEntity);
    }

    @Override
    public void save(User user) {
        UserEntity userEntity = domainToDbo(user);
        userJpaRepository.save(userEntity);
    }

    private User dboToDomain(UserEntity userEntity) {
        return new User(userEntity.getUserId(),
                userEntity.getEmail(),
                userEntity.getPassword(),
                userEntity.getFullName(),
                userEntity.getAge(),
                userEntity.getWorkLocation(),
                userEntity.getMedicalId(),
                userEntity.getMedicalSpeciality(),
                userEntity.getEducation(),
                userEntity.getRole());
    }

    private UserEntity domainToDbo(User user) {
        return UserEntity.builder()
                .userId(user.getUserId())
                .email(user.getEmail())
                .password(user.getPassword())
                .fullName(user.getUsername())
                .age(user.getAge())
                .workLocation(user.getWorkLocation())
                .medicalId(user.getMedicalId())
                .medicalSpeciality(user.getMedicalSpeciality())
                .education(user.getEducation())
                .role(user.getRole())
                .build();
    }
}
