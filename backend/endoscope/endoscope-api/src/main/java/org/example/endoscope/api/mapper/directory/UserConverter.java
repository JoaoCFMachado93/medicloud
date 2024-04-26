package org.example.endoscope.api.mapper.directory;

import org.example.endoscope.api.openapi.model.UserEntity;
import org.example.endoscope.core.domain.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface UserConverter {

    UserEntity domainToDto(User user);

    @Mappings({
            @Mapping(target = "userId", ignore = true)
    })
    User dtoToDomain(UserEntity userEntity);
}
