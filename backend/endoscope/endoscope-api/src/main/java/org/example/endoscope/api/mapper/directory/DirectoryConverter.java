package org.example.endoscope.api.mapper.directory;

import org.example.endoscope.api.openapi.model.DirectoryEntity;
import org.example.endoscope.core.domain.Directory;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface DirectoryConverter {

    DirectoryEntity domainToDto(Directory directory);

    @Mappings({
            @Mapping(target = "directoryId", ignore = true)
    })
    Directory dtoToDomain(DirectoryEntity directory);
}
