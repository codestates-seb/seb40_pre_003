package padakmon.server.user.mapper;

import java.util.Arrays;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T19:14:11+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userSignUpDtoToUser(UserDto.SignUp signUpDto) {
        if ( signUpDto == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( signUpDto.getEmail() );
        user.setPassword( signUpDto.getPassword() );
        user.setDisplayName( signUpDto.getDisplayName() );

        return user;
    }

    @Override
    public User patchMyPageDtoToUser(UserDto.PatchMyPage patchMyPageDto) {
        if ( patchMyPageDto == null ) {
            return null;
        }

        User user = new User();

        user.setDisplayName( patchMyPageDto.getDisplayName() );
        user.setAboutMe( patchMyPageDto.getAboutMe() );
        byte[] image = patchMyPageDto.getImage();
        if ( image != null ) {
            user.setImage( Arrays.copyOf( image, image.length ) );
        }

        return user;
    }

    @Override
    public UserDto.UserPageResponse userToUserPageResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.UserPageResponse userPageResponse = new UserDto.UserPageResponse();

        byte[] image = user.getImage();
        if ( image != null ) {
            userPageResponse.setImage( Arrays.copyOf( image, image.length ) );
        }
        userPageResponse.setDisplayName( user.getDisplayName() );
        userPageResponse.setAboutMe( user.getAboutMe() );
        userPageResponse.setQuestionCount( (int) user.getQuestionCount() );
        userPageResponse.setAnswerCount( (int) user.getAnswerCount() );

        return userPageResponse;
    }
}
