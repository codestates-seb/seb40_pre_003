package padakmon.server.answer.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import padakmon.server.answer.entity.Answer;
import padakmon.server.answer.repository.AnswerRepository;
import padakmon.server.authority.utils.LoggedInUserInfoUtils;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.question.entity.Question;
import padakmon.server.question.service.QuestionService;
import padakmon.server.user.entity.User;
import padakmon.server.user.entity.UserTag;
import padakmon.server.user.repository.UserRepository;
import padakmon.server.user.service.UserJoinService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;
    private final QuestionService questionService;
    private final LoggedInUserInfoUtils loggedInUserInfoUtils;
    private final UserJoinService userJoinService;

    public void delete(long answerId, long questionId) throws Exception {
        //접속한 사람이 썼는가?
        Answer answer = verifyIfSameWriter(answerId);

        //User에 AnswerCount 하나 down
        //TODO: verify 메서드 기범님 파트 껄 끌어다 쓰기
        User user = loggedInUserInfoUtils.extractUser();
        user.setAnswerCount(user.getAnswerCount() - 1);
        //Question에 AnswerCount 하나 down
        Question question = questionService.read(questionId);
        question.setAnswerCount(question.getAnswerCount() - 1);

        answer.setUser(user);
        answer.setQuestion(question);
        Answer savedAnswer = answerRepository.save(answer);
        answerRepository.delete(savedAnswer);
    }

    public Answer update(long answerId, Answer answer) {
        Answer answerBefore = verifyAnswer(answerId);
        answerBefore.setContents(answer.getContents());
        return answerRepository.save(answerBefore);
    }

    private Answer verifyIfSameWriter(long answerId) {
        //접속한 사람이 작성한 글이 맞는지 확인
        long userId = loggedInUserInfoUtils.extractUserId();
        Answer answer = verifyAnswer(answerId);
        if(answer.getUser().getUserId() != userId) {
            throw new BusinessLogicException("Editing the question", ExceptionCode.NOT_A_WRITER, String.valueOf(userId));
        }
        return answer;
    }

    public Answer verifyAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
    public Answer create(long questionId, Answer answer) {
        //User에 AnswerCount 하나 up
        //TODO: verify 메서드 기범님 파트 껄 끌어다 쓰기
        User user = loggedInUserInfoUtils.extractUser();
        user.setAnswerCount(user.getAnswerCount() + 1);

        //Question에 AnswerCount 하나 up
        Question question = questionService.read(questionId);
        question.setAnswerCount(question.getAnswerCount() + 1);
        //User와 태그 연관관계 M:M연관관계 설정
        List<UserTag> userTags = question.getQuestionTags().stream().map(
                questionTag -> {
                    UserTag userTag = new UserTag();
                    userTag.setTag(questionTag.getTag());
                    userTag.setUser(user);
                    return userTag;
                }
        ).collect(Collectors.toList());
        user.setUserTags(userTags);
        //Cascade이용하여 저장
        answer.setQuestion(question);
        answer.setUser(user);
        return answerRepository.save(answer);
    }

    public List<Answer> getAnswersOfQuestion(Question question) {
        return answerRepository.findAllByQuestion(question);
    }
}
