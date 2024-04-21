package org.example.endoscope.application.spring.configuration.api;

import org.example.endoscope.api.DirectoriesAPIDelegateImpl;
import org.example.endoscope.api.ImagesAPIDelegateImpl;
import org.example.endoscope.api.mapper.directory.DirectoryConverter;
import org.example.endoscope.api.mapper.directory.ImageConverter;
import org.example.endoscope.api.openapi.DirectoryApiDelegate;
import org.example.endoscope.api.openapi.ImageApiDelegate;
import org.example.endoscope.core.driver.DirectoryServicePort;
import org.example.endoscope.core.driver.ImageServicePort;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class EndoscopeApiConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("*");
    }

    @Bean
    public DirectoryApiDelegate directoriesApiDelegate(
            DirectoryServicePort directoryServicePort,
            DirectoryConverter directoryConverter) {
        return new DirectoriesAPIDelegateImpl(directoryServicePort, directoryConverter);
    }

    @Bean
    public DirectoryConverter directoryConverter() {
        return Mappers.getMapper(DirectoryConverter.class);
    }

    @Bean
    public ImageApiDelegate ImageApiDelegate(
            ImageServicePort imageServicePort,
            ImageConverter imageConverter) {
        return new ImagesAPIDelegateImpl(imageServicePort, imageConverter);
    }

    @Bean
    public ImageConverter imageConverter() {
        return Mappers.getMapper(ImageConverter.class);
    }
}
