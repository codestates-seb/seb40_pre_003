package padakmon.server.tag.controller;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import padakmon.server.dto.PageInfo;
import padakmon.server.question.service.QuestionSearchService;
import padakmon.server.tag.dto.TagDto;
import padakmon.server.tag.entity.Tag;
import padakmon.server.tag.mapper.TagMapper;
import padakmon.server.tag.service.TagService;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/tags")
@AllArgsConstructor
@Validated
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;
    private final QuestionSearchService questionSearchService;

    @GetMapping
    public ResponseEntity getTag(@RequestParam(name = "query", required = false) String query,
                                 @RequestParam(name = "order", required = false) String order,
                                 @Positive @RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                 @Positive @RequestParam(name = "size", required = false, defaultValue = "15") int size) {
        //오더 모드
        String orderMode = questionSearchService.getOrderMode(order);

        //쿼리가 있으면 쿼리로 검색하고 아니면 최근껄로 뿌림.
        Page<Tag> tags = tagService.delegateFindTags(query, page - 1, size, Sort.by(orderMode).descending());
        //페이지 Info 구성
        PageInfo pageInfo = PageInfo.of(tags, page, size);

        TagDto.response response = tagMapper.tagsToResponse(orderMode, pageInfo, tags.getContent());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
