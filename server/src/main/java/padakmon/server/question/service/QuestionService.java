package padakmon.server.question.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.authority.utils.LoggedInUserInfoUtils;
import padakmon.server.question.entity.Question;
import padakmon.server.question.repository.QuestionRepository;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;
import padakmon.server.user.service.UserJoinService;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class QuestionService {
    private QuestionRepository repository;
    private LoggedInUserInfoUtils userInfoUtils;
    private UserJoinService userJoinService;
    //todo: 임시
    private UserRepository userRepository;

    public Question create(Question question) {
        long userId = userInfoUtils.extractUserId();
        //todo: 진짜 메서드로 변경해야함. 유저 서비스에서 유저 찾아오는 걸로 변환
        User user = getUser(userId);
        //질문 숫자 하나 늘려줌.
        user.setQuestionCount(user.getQuestionCount() + 1);
        question.setUser(user);
        log.info("creating Quesitons");
        return repository.save(question);
    }
    //todo: 임시메서드
    private User getUser(long userId) {
        return userRepository.findById(userId).get();
    }
}
