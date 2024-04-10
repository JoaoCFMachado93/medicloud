package org.example.endoscope.output.mapper.directory;

import org.example.endoscope.core.domain.Directory;
import org.example.endoscope.output.dbo.DirectoryEntity;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface DbDirectoryConverter {

    Directory dboToDomain(DirectoryEntity directory);

    DirectoryEntity domainToDbo(Directory directory);

}
