package padakmon.server.user.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserPageService;

import javax.validation.constraints.Positive;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
@Validated
public class UserPageController {

    private final UserPageService userPageService;
    private final UserMapper mapper;

    @GetMapping("/{user-id}")
    public ResponseEntity getUserPage(@Positive @PathVariable("user-id") Long userId) {
        User user = userPageService.findUser(userId);
        UserDto.UserPageResponse response = mapper.userToUserPageResponse(user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUserPage(@PathVariable("user-id") Long userId,
                                        @RequestBody UserDto.PatchMyPage patchMyPageDto) {
        User user = userPageService.updateUser(mapper.patchMyPageDtoToUser(patchMyPageDto), userId);
        UserDto.UserPageResponse response = mapper.userToUserPageResponse(user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}