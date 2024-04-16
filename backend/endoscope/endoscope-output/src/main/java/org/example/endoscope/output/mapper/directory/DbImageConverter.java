package org.example.endoscope.output.mapper.directory;

import org.example.endoscope.core.domain.Image;
import org.example.endoscope.output.dbo.ImageEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.sql.Timestamp;
import java.time.Instant;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface DbImageConverter {

    @Mapping(source = "directory.directoryId", target = "directory")
    Image dboToDomain(ImageEntity directory);

    @Mapping(source = "directory", target = "directory.directoryId")
    ImageEntity domainToDbo(Image directory);

    default Long map(Timestamp timestamp) {
        return timestamp.getTime();
    }

    default Timestamp map(Long time) {
        return Timestamp.from(Instant.ofEpochMilli(time));
    }

}
