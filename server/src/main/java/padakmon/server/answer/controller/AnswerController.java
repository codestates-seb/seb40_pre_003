package padakmon.server.answer.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import padakmon.server.answer.dto.AnswerDto;
import padakmon.server.answer.entity.Answer;
import padakmon.server.answer.mapper.AnswerMapper;
import padakmon.server.answer.service.AnswerService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/questions/{question-id}/answers")
@Validated
@AllArgsConstructor
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper answerMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public long postAnswer(@Positive @PathVariable("question-id") long questionId,
                           @Valid @RequestBody AnswerDto.Post post) {
        Answer response = answerService.create(questionId, answerMapper.postToEntity(post));
        return response.getAnswerId();
    }

    @PatchMapping("/{answer-id}")
    public long patchAnswer(@PathVariable(name = "answer-id") @Positive long answerId,
                            @Valid @RequestBody AnswerDto.Patch patch) {
        Answer response = answerService.update(answerId, answerMapper.patchToEntity(patch));
        return response.getAnswerId();
    }

    @DeleteMapping("/{answer-id}")
    public void delete(@PathVariable(name = "answer-id") @Positive long answerId,
                       @PathVariable(name = "question-id") @Positive long questionId) throws Exception {
        answerService.delete(answerId, questionId);
    }
}
