package org.example.endoscope.output.adapter;

import org.example.endoscope.core.domain.User;
import org.example.endoscope.core.driven.UserRepositoryPort;
import org.example.endoscope.output.dbo.UserEntity;
import org.example.endoscope.output.repository.UserJpaRepository;

import java.util.Optional;

public class UserRepository implements UserRepositoryPort {

    private final UserJpaRepository userJpaRepository;

    public UserRepository(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public Optional<User> findByEmail(String email) {
        Optional<UserEntity> userEntity = userJpaRepository.findByEmail(email);

        return userEntity.map(this::dboToDomain);
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
                userEntity.getSalutation(),
                userEntity.getGender(),
                userEntity.getFullName(),
                userEntity.getAge(),
                userEntity.getDateOfBirth(),
                userEntity.getCountryOfOrigin(),
                userEntity.getWorkLocation(),
                userEntity.getWorkPlaceSetting(),
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
                .salutation(user.getSalutation())
                .gender(user.getGender())
                .fullName(user.getUsername())
                .age(user.getAge())
                .dateOfBirth(user.getDateOfBirth())
                .countryOfOrigin(user.getCountryOfOrigin())
                .workLocation(user.getWorkLocation())
                .workPlaceSetting(user.getWorkPlaceSetting())
                .medicalId(user.getMedicalId())
                .medicalSpeciality(user.getMedicalSpeciality())
                .education(user.getEducation())
                .role(user.getRole())
                .build();
    }
}
