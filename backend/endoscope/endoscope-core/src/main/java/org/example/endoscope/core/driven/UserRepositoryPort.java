package org.example.endoscope.core.driven;

import org.example.endoscope.core.domain.User;

import java.util.Optional;

public interface UserRepositoryPort {

    Optional<User> findByEmail(String email);

    void save(User user);

}
