package padakmon.server.user.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-26T01:14:15+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userDtoToUser(UserDto.SignUp signUpDto) {
        if ( signUpDto == null ) {
            return null;
        }

        User user = new User();

        user.setName( signUpDto.getDisplayName() );
        user.setEmail( signUpDto.getEmail() );
        user.setPassword( signUpDto.getPassword() );

        return user;
    }
}
