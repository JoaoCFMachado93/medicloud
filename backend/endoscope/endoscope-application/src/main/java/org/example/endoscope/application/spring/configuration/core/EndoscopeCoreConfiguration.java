package org.example.endoscope.application.spring.configuration.core;

import org.example.endoscope.core.driven.DirectoryRepositoryPort;
import org.example.endoscope.core.driver.DirectoryServicePort;
import org.example.endoscope.core.service.SpringDirectoryService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EndoscopeCoreConfiguration {

    @Bean
    public DirectoryServicePort directoryServicePort(DirectoryRepositoryPort directoryRepositoryPort) {
        return new SpringDirectoryService(directoryRepositoryPort);
    }
}
