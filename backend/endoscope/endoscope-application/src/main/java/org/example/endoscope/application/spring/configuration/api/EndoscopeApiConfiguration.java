package org.example.endoscope.application.spring.configuration.api;

import org.example.endoscope.api.DirectoriesAPIDelegateImpl;
import org.example.endoscope.api.mapper.directory.DirectoryConverter;
import org.example.endoscope.api.openapi.DirectoriesApiDelegate;
import org.example.endoscope.core.driver.DirectoryServicePort;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class EndoscopeApiConfiguration implements WebMvcConfigurer {

    @Bean
    public DirectoriesApiDelegate directoriesApiDelegate(
            DirectoryServicePort directoryServicePort,
            DirectoryConverter directoryConverter) {
        return new DirectoriesAPIDelegateImpl(directoryServicePort, directoryConverter);
    }

    @Bean
    public DirectoryConverter directoryConverter() {
        return Mappers.getMapper(DirectoryConverter.class);
    }
}
