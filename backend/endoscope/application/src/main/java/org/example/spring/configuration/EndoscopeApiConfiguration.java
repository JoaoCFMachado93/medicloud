package org.example.spring.configuration;

import org.example.api.DirectoriesAPIDelegateImpl;
import org.example.endoscope.api.openapi.DirectoriesApiDelegate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class EndoscopeApiConfiguration implements WebMvcConfigurer {

    @Bean
    public DirectoriesApiDelegate directoriesApiDelegate() {
        return new DirectoriesAPIDelegateImpl();
    }
}
