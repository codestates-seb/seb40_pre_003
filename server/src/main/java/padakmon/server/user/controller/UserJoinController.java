package padakmon.server.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserJoinService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserJoinController {

    private final UserJoinService userJoinService;
    private final UserMapper userMapper;

    public UserJoinController(UserJoinService userJoinService, UserMapper userMapper) {
        this.userJoinService = userJoinService;
        this.userMapper = userMapper;
    }

    @PostMapping
    public ResponseEntity signUp(@Valid @RequestBody UserDto.SignUp signUpDto) {

        userJoinService.createUser(userMapper.userSignUpDtoToUser(signUpDto));
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
