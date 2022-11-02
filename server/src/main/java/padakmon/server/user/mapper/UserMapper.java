package padakmon.server.user.mapper;

import org.mapstruct.Mapper;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userSignUpDtoToUser(UserDto.SignUp signUpDto);
}
