package org.example.endoscope.api.mapper.directory;

import org.example.endoscope.api.openapi.model.ImageEntity;
import org.example.endoscope.core.domain.Image;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface ImageConverter {

    ImageEntity domainToDto(Image image);

    @Mappings({
            @Mapping(target = "imageId", ignore = true)
    })
    Image dtoToDomain(ImageEntity imageEntity);
}
