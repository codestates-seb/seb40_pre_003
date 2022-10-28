package padakmon.server.question.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.entity.Question;
import padakmon.server.question.mapper.QuestionMapper;
import padakmon.server.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
@AllArgsConstructor
public class QuestionController {
    private QuestionService questionService;
    private QuestionMapper mapper;

    @PostMapping
    public ResponseEntity post(@RequestBody @Valid QuestionDto.Post post){
        log.debug("entering post");
        Question question = questionService.create(mapper.postToEntity(post));
        QuestionDto.PostSuccessResponse response = mapper.EntityToSuccessResponse(question);
        log.info("Question Post success");
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable(name = "question-id") @Positive long boardId) {
        return new ResponseEntity(boardId, HttpStatus.OK);
    }
}
