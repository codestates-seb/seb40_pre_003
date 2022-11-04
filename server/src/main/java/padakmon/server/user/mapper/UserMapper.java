package padakmon.server.user.mapper;

import org.mapstruct.Mapper;
import padakmon.server.dto.PageInfo;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userSignUpDtoToUser(UserDto.SignUp signUpDto);

    User patchMyPageDtoToUser(UserDto.PatchMyPage patchMyPageDto);

    UserDto.UserPageResponse userToUserPageResponse(User user);

    default UserDto.Info userToUserInfo(User user) {
        UserDto.Info info = new UserDto.Info();
        info.setUserId(user.getUserId());
        info.setAnswerCount(user.getAnswerCount());
        info.setDisplayName(user.getDisplayName());
        List<String> tags = user.getUserTags().stream().map(userTag -> userTag.getTag().getName()).distinct().limit(3).collect(Collectors.toList());
        info.setTags(tags);
        return info;
    }

    default UserDto.searchResponse mapToResponse(String orderMode, PageInfo pageInfo, List<User> users){
        UserDto.searchResponse response = new UserDto.searchResponse();
        response.setOrderMode(orderMode);
        response.setPageInfo(pageInfo);
        response.setUsers(users.stream().map(user -> userToUserInfo(user)).collect(Collectors.toList()));
        return response;
    }

}
