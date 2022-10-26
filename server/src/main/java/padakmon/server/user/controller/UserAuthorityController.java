package padakmon.server.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserAuthorityService;

import javax.validation.Valid;

@RestController
public class UserAuthorityController {

    private final UserAuthorityService userAuthorityService;
    private final UserMapper userMapper;

    public UserAuthorityController(UserAuthorityService userAuthorityService, UserMapper userMapper) {
        this.userAuthorityService = userAuthorityService;
        this.userMapper = userMapper;
    }

    // TODO: BindingResult 처리
    @PostMapping("/users")
    public ResponseEntity signUp(@Valid @RequestBody UserDto.SignUp userDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }

        userAuthorityService.createUser(userMapper.userDtoToUser(userDto));
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
