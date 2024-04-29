package org.example.endoscope.output.dbo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Data
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "salutation", nullable = false)
    private String salutation;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "age", nullable = false)
    private String age;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "country_of_origin", nullable = false)
    private String countryOfOrigin;

    @Column(name = "work_location", nullable = false)
    private String workLocation;

    @Column(name = "work_place_setting", nullable = false)
    private String workPlaceSetting;

    @Column(name = "medical_id", nullable = false)
    private String medicalId;

    @Column(name = "medical_speciality", nullable = false)
    private String medicalSpeciality;

    @Column(name = "education", nullable = false)
    private String education;

    @Column(name = "role", nullable = false)
    private String role;

}
