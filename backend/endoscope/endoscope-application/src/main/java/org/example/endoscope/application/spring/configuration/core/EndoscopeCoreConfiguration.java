package org.example.endoscope.application.spring.configuration.core;

import org.example.endoscope.core.driven.DirectoryRepositoryPort;
import org.example.endoscope.core.driven.ImageRepositoryPort;
import org.example.endoscope.core.driver.DirectoryServicePort;
import org.example.endoscope.core.driver.ImageServicePort;
import org.example.endoscope.core.service.SpringDirectoryService;
import org.example.endoscope.core.service.SpringImageService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EndoscopeCoreConfiguration {

    @Bean
    public DirectoryServicePort directoryServicePort(DirectoryRepositoryPort directoryRepositoryPort) {
        return new SpringDirectoryService(directoryRepositoryPort);
    }

    @Bean
    public ImageServicePort imageServicePort(ImageRepositoryPort imageRepositoryPort,
                                             DirectoryRepositoryPort directoryRepositoryPort) {
        return new SpringImageService(imageRepositoryPort, directoryRepositoryPort);
    }
}
