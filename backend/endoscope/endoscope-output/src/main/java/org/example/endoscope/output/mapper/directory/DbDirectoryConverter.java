package org.example.endoscope.output.mapper.directory;

import org.example.endoscope.core.domain.Directory;
import org.example.endoscope.output.dbo.DirectoryEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface DbDirectoryConverter {

    @Mapping(source = "parentDirectory.directoryId", target = "parentDirectory")
    Directory dboToDomain(DirectoryEntity directory);

    @Mapping(source = "parentDirectory", target = "parentDirectory.directoryId")
    DirectoryEntity domainToDbo(Directory directory);

}
