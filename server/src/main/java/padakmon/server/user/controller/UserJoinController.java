package padakmon.server.user.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserJoinService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/sign-up")
@AllArgsConstructor
public class UserJoinController {

    private final UserJoinService userJoinService;
    private final UserMapper userMapper;

    @PostMapping
    public ResponseEntity signUp(@Valid @RequestBody UserDto.SignUp signUpDto) {

        userJoinService.createUser(userMapper.userSignUpDtoToUser(signUpDto));
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
