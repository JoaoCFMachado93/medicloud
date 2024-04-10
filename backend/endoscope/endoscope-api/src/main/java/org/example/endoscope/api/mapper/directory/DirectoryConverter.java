package org.example.endoscope.api.mapper.directory;

import org.example.endoscope.api.openapi.model.DirectoryEntity;
import org.example.endoscope.core.domain.Directory;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DirectoryConverter {

    DirectoryEntity domainToDto(Directory directory);

    Directory dtoToDomain(DirectoryEntity directory);
}
