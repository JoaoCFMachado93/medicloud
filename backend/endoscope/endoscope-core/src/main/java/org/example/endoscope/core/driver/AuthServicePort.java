package org.example.endoscope.core.driver;

import org.example.endoscope.core.domain.User;

public interface AuthServicePort {

    void registerUser(User user);

    User loginUser(String email, String password);
}
