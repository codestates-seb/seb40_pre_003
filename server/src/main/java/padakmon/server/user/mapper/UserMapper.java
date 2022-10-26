package padakmon.server.user.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "displayName", target = "name")
    User userDtoToUser(UserDto.SignUp signUpDto);
}
