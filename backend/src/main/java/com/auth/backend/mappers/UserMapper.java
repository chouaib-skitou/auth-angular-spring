package com.auth.backend.mappers;


import com.auth.backend.dto.UserDto;
import com.auth.backend.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
}
