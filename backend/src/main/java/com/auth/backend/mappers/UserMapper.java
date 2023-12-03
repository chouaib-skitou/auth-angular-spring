package com.auth.backend.mappers;


import com.auth.backend.dto.SignUpDto;
import com.auth.backend.dto.UserDto;
import com.auth.backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);


    @Mapping(target = "password", ignore = true)
    User signUpDtoToUser(SignUpDto signUpDto);
}
