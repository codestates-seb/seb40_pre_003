package padakmon.server.question.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import padakmon.server.answer.entity.Answer;
import padakmon.server.answer.service.AnswerService;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.entity.Question;
import padakmon.server.question.mapper.QuestionMapper;
import padakmon.server.question.service.QuestionService;
import padakmon.server.tag.service.TagService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
@AllArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final AnswerService answerService;
    private final QuestionMapper mapper;

    @PostMapping
    public ResponseEntity post(@RequestBody @Valid QuestionDto.Post post){
        Question question = questionService.create(mapper.postToEntity(post), post.getTags());
        QuestionDto.SuccessResponse response = mapper.EntityToSuccessResponse(question);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity get(@PathVariable(name = "question-id") @Positive long questionId) {
        Question question = questionService.read(questionId);
        List<Answer> answers = answerService.getAnswersOfQuestion(question);

        QuestionDto.GetResponse response = mapper.QuestionAnswersToResponse(question, answers);
        return new ResponseEntity(response, HttpStatus.OK);
    }
    @PatchMapping("/{question-id}")
    public ResponseEntity patch(@PathVariable(name = "question-id") @Positive long questionId,
                                @RequestBody @Valid QuestionDto.Patch patch) {
        Question question = questionService.update(mapper.patchToEntity(patch), patch.getTags(), questionId);
        QuestionDto.SuccessResponse response = mapper.EntityToSuccessResponse(question);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{question-id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable(name = "question-id") @Positive long questionId) {

        questionService.delete(questionId);
    }
}
