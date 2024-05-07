package org.example.endoscope.core.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@AllArgsConstructor
@Builder(toBuilder = true)
@Data
public class User implements UserDetails {

    private long userId;
    private String email;
    private String password;
    private String salutation;
    private String gender;
    private String fullName;
    private String age;
    private LocalDate dateOfBirth;
    private String countryOfOrigin;
    private String workLocation;
    private String workPlaceSetting;
    private String medicalId;
    private String medicalSpeciality;
    private String education;
    private String role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(() -> role);
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
