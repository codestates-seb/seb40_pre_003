package padakmon.server.user.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import padakmon.server.dto.PageInfo;
import padakmon.server.question.service.Order;
import padakmon.server.tag.dto.TagDto;
import padakmon.server.tag.entity.Tag;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserJoinService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

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

    @GetMapping
    public ResponseEntity get(@RequestParam(name = "query", required = false) String query,
                              @RequestParam(name = "order", required = false) String order,
                              @Positive @RequestParam(name = "page", required = false, defaultValue = "1") int page,
                              @Positive @RequestParam(name = "size", required = false, defaultValue = "15") int size) {
        //오더 모드
        String orderMode = Order.getOrderMode(order);

        //쿼리가 있으면 쿼리로 검색하고 아니면 최근껄로 뿌림.
        Page<User> users = userJoinService.delegateFindUsers(query, page - 1, size, Sort.by(orderMode).descending());
        //페이지 Info 구성
        PageInfo pageInfo = PageInfo.of(users, page, size);
        //Dto mapping
        UserDto.searchResponse response = userMapper.mapToResponse(order, pageInfo, users.getContent());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
