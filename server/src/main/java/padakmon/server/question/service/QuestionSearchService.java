package padakmon.server.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.question.entity.Question;
import padakmon.server.question.repository.QuestionRepository;

@Service
@Transactional
public class QuestionSearchService {

    private final QuestionRepository questionRepository;

    public QuestionSearchService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Page<Question> findQuestions(int page, int size, Sort sort) {
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        return questionRepository.findAll(pageRequest);
    }

    public String getOrderMode(String order) {
        if (Order.NEWEST.orderParam.equals(order)) {
            return Order.NEWEST.orderMode;
        } else if (Order.SCORE.orderParam.equals(order)) {
            return Order.SCORE.orderMode;
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_VALID_ORDER);
        }
    }

    public String getOrderModeDefault() {
        return Order.NEWEST.orderMode;
    }
}
