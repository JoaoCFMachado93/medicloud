package org.example.endoscope.application.spring.configuration.output;

import org.example.endoscope.core.driven.DirectoryRepositoryPort;
import org.example.endoscope.output.adapter.DirectoryRepository;
import org.example.endoscope.output.mapper.directory.DbDirectoryConverter;
import org.example.endoscope.output.repository.DirectoryJpaRepository;
import org.mapstruct.factory.Mappers;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "org.example.endoscope.output.repository")
@EntityScan(basePackages = "org.example.endoscope.output.dbo")
public class EndoscopeOutputConfiguration {

    @Bean
    public DirectoryRepositoryPort directoryRepositoryPort(
            DirectoryJpaRepository directoryJpaRepository,
            DbDirectoryConverter dbDirectoryConverter) {
        return new DirectoryRepository(directoryJpaRepository, dbDirectoryConverter);
    }

    @Bean
    public DbDirectoryConverter dbDirectoryConverter() {
        return Mappers.getMapper(DbDirectoryConverter.class);
    }
}
