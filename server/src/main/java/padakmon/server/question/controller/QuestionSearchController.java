package padakmon.server.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import padakmon.server.question.dto.PageInfo;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.dto.QuestionSearchDto;
import padakmon.server.question.entity.Question;
import padakmon.server.question.mapper.QuestionSearchMapper;
import padakmon.server.question.service.QuestionSearchService;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
public class QuestionSearchController {

    private final QuestionSearchService questionSearchService;
    private final QuestionSearchMapper mapper;

    public QuestionSearchController(QuestionSearchService questionSearchService, QuestionSearchMapper mapper) {
        this.questionSearchService = questionSearchService;
        this.mapper = mapper;
    }

    @GetMapping("/")
    public ResponseEntity getTopQuestions() {
        String orderMode = questionSearchService.getOrderModeDefault();
        Page<Question> questionPage =questionSearchService.findQuestions(0, 20, Sort.by(orderMode));
        List<Question> questions = questionPage.getContent();

        List<QuestionDto.GetResponse> responsePage = mapper.questionsToPageResponses(questions);

        return new ResponseEntity(new QuestionSearchDto(responsePage), HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getAllQuestions(@Positive @RequestParam("page") int page,
                                          @Positive @RequestParam("size") int size) {
        String orderMode = questionSearchService.getOrderModeDefault();
        Page<Question> questionPage =questionSearchService.findQuestions(page - 1, size, Sort.by(orderMode));
        PageInfo pageInfo = PageInfo.of(questionPage, page, size);
        List<Question> questions = questionPage.getContent();

        List<QuestionDto.GetResponse> responsePage = mapper.questionsToPageResponses(questions);

        return new ResponseEntity(new QuestionSearchDto(pageInfo, responsePage), HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getOrderQuery(@RequestParam("order") String order,
                                     @RequestParam("page") int page,
                                     @RequestParam("size") int size) {
        String orderMode = questionSearchService.getOrderMode(order);
        Page<Question> questionPage =questionSearchService.findQuestions(page - 1, size, Sort.by(orderMode));
        PageInfo pageInfo = PageInfo.of(questionPage, page, size);
        List<Question> questions = questionPage.getContent();

        List<QuestionDto.GetResponse> responsePage = mapper.questionsToPageResponses(questions);

        return new ResponseEntity(new QuestionSearchDto(order,pageInfo, responsePage), HttpStatus.OK);
    }
}
