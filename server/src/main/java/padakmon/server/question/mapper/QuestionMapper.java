package padakmon.server.question.mapper;

import org.mapstruct.Mapper;
import padakmon.server.answer.dto.AnswerDto;
import padakmon.server.answer.entity.Answer;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.entity.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    public Question postToEntity(QuestionDto.Post post);
    public Question patchToEntity(QuestionDto.Patch patch);
    default public QuestionDto.SuccessResponse EntityToSuccessResponse(Question question) {
        QuestionDto.SuccessResponse response = new QuestionDto.SuccessResponse();
        response.setPostId(question.getQuestionId());
        return response;
    }
    default public QuestionDto.GetResponse QuestionAnswersToResponse(Question question, List<Answer> answers) {
        QuestionDto.GetResponse response = new QuestionDto.GetResponse();
        response.setTitle(question.getTitle());
        response.setBody(question.getBody());
        response.setCreatedAt(question.getCreatedAt());
        response.setModifiedAt(question.getModifiedAt());
        response.setScore(question.getVoteScore());
        response.setViewCount(question.getViewCount());
        response.setAnswerCount(question.getAnswerCount());

        QuestionDto.UserInQuestion user = new QuestionDto.UserInQuestion();
        user.setDisplayName(question.getUser().getName());
        response.setUser(user);

        response.setTags(question.getQuestionTags().stream().map(
                questionTag -> questionTag.getTag().getName()
        ).collect(Collectors.toList()));

        ArrayList<AnswerDto.Response> answersResponse = (ArrayList<AnswerDto.Response>) answers.stream().map(
                answer -> {
                    AnswerDto.Response answerResponse = new AnswerDto.Response();
                    answerResponse.setAnswerId(answer.getAnswerId());
                    answerResponse.setContents(answer.getContents());
                    answerResponse.setScore(answer.getVoteScore());
                    answerResponse.setCreatedAt(answer.getCreatedAt());

                    QuestionDto.UserInQuestion userOfAnswer = new QuestionDto.UserInQuestion();
                    user.setDisplayName(answer.getUser().getName());
                    answerResponse.setUser(user);
                    return answerResponse;
                })
                .collect(Collectors.toList());
        response.setAnswers(answersResponse);
        return response;
    }

}
