package padakmon.server.user.controller;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import padakmon.server.dto.PageInfo;
import padakmon.server.question.service.QuestionSearchService;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserPageService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
@Validated
public class UserPageController {

    private final UserPageService userPageService;
    private final QuestionSearchService questionSearchService;
    private final UserMapper mapper;

    @GetMapping("/{user-id}")
    public ResponseEntity getUserPage(@Positive @PathVariable("user-id") Long userId) {
        User user = userPageService.findUser(userId);
        UserDto.UserPageResponse response = mapper.userToUserPageResponse(user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUserPage(@PathVariable("user-id") Long userId,
                                        @Valid @RequestBody UserDto.PatchMyPage patchMyPageDto) {
        User user = userPageService.updateUser(mapper.patchMyPageDtoToUser(patchMyPageDto), userId);
        UserDto.UserPageResponse response = mapper.userToUserPageResponse(user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(@RequestParam(name = "query", required = false) String query,
                                   @RequestParam(name = "order", required = false) String order,
                                   @Positive @RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                   @Positive @RequestParam(name = "size", required = false, defaultValue = "15") int size) {
        //오더 모드
        String orderMode = questionSearchService.getOrderMode(order);

        //쿼리가 있으면 쿼리로 검색하고 아니면 최근껄로 뿌림.
        Page<User> users = userPageService.delegateFindUsers(query, page - 1, size, Sort.by(orderMode).descending());
        //페이지 Info 구성
        PageInfo pageInfo = PageInfo.of(users, page, size);
        //Dto mapping
        UserDto.searchResponse response = mapper.mapToResponse(order, pageInfo, users.getContent());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}