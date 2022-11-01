package padakmon.server.question.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.authority.utils.LoggedInUserInfoUtils;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.question.entity.Question;
import padakmon.server.question.repository.QuestionRepository;
import padakmon.server.tag.entity.QuestionTag;
import padakmon.server.tag.entity.Tag;
import padakmon.server.tag.repository.TagRepository;
import padakmon.server.tag.service.TagService;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class QuestionService {
    private QuestionRepository questionRepository;
    private LoggedInUserInfoUtils userInfoUtils;
    //todo: 임시
    private UserRepository userRepository;
    private TagService tagService;
    private TagRepository tagRepository;



    public void delete(long questionId) {
        //접속한 사람이 작성한 글이 맞는지 확인
        Question question = verifyIfSameWriter(questionId);
        //질문한 사람의 질문 개수 하나 감소
        User user = question.getUser();
        user.setQuestionCount(user.getQuestionCount() - 1);
        userRepository.save(user);
        //답변 개수는 감소 안함. 왜냐면 질문은 자신의 글을 자신의 의지로 지웠기 때문에 감소하고. 답변은 자신의 글을 타인의 의지로 지웠기 때문에 감소 안함.
        //질문에 등록된 태그들 하나씩 감소
        subtractQuestionTagCount(question.getQuestionTags());
        questionRepository.delete(question);
    }

    public Question update(Question patchQuestion, List<String> tags, long questionId) {
        //접속한 사람이 작성한 글이 맞는지 확인
        Question question = verifyIfSameWriter(questionId);
        //수정사항 반영
        question.setTitle(patchQuestion.getTitle());
        question.setBody(patchQuestion.getBody());
        //태그는 전체 질문 숫자 1씩 감소
        subtractQuestionTagCount(question.getQuestionTags());
        Set<QuestionTag> questionTagSet = tags.stream().map(
                tagName -> {
                    QuestionTag questionTag = new QuestionTag();
                    questionTag.setQuestion(question);
                    questionTag.setTag(tagService.createOrUpdate(tagName));
                    return questionTag;
                }).collect(Collectors.toSet());
        question.setQuestionTags(questionTagSet);

        return questionRepository.save(question);

    }
    private void subtractQuestionTagCount(Set<QuestionTag> questionTags) {
        questionTags.stream().forEach(questionTag -> {
            Tag tag = questionTag.getTag();
            tag.subtractQuestionCountByOne();
            tagRepository.save(tag);
        });
    }
    private Question verifyIfSameWriter(long questionId) {
        //접속한 사람이 작성한 글이 맞는지 확인
        long userId = userInfoUtils.extractUserId();
        Question question = verifyQuestion(questionId);
        if(question.getUser().getId() != userId) {
            throw new BusinessLogicException("Editing the question", ExceptionCode.NOT_A_WRITER, String.valueOf(userId));
        }
        return question;
    }

    public Question create(Question question, List<String> tags) {
        long userId = userInfoUtils.extractUserId();
        //todo: 진짜 메서드로 변경해야함. 유저 서비스에서 유저 찾아오는 걸로 변환
        User user = getUser(userId);
        //질문 숫자 하나 늘려줌.
        user.setQuestionCount(user.getQuestionCount() + 1);
        question.setUser(user);

        //태그가 존재하는 태그인지 확인하여, 존재하지 않다면 하나 생성하고, 존재한다면 태그의 질문 수 하나 증가
        Set<QuestionTag> questionTagSet = tags.stream().map(
                tagName -> {
                    QuestionTag questionTag = new QuestionTag();
                    questionTag.setQuestion(question);
                    questionTag.setTag(tagService.createOrUpdate(tagName));
                    return questionTag;
                }).collect(Collectors.toSet());
        question.setQuestionTags(questionTagSet);

        return questionRepository.save(question);
    }

    public Question read(long questionId) {
        return verifyQuestion(questionId);
    }
    private Question verifyQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        return optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }
    //todo: 임시메서드
    private User getUser(long userId) {
        return userRepository.findById(userId).get();
    }
}
