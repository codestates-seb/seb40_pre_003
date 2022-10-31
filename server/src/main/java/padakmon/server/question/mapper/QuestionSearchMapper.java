package padakmon.server.question.mapper;

import org.mapstruct.Mapper;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.entity.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionSearchMapper {

    default List<QuestionDto.GetResponse> questionsToPageResponses(List<Question> questions) {
        List<QuestionDto.GetResponse> pageResponses = new ArrayList<>();

        for (Question question : questions) {
            QuestionDto.GetResponse responseDto = new QuestionDto.GetResponse();
            responseDto.setTitle(question.getTitle());
            responseDto.setBody(question.getBody());
            responseDto.setCreatedAt(question.getCreatedAt());
            responseDto.setModifiedAt(question.getModifiedAt());
            responseDto.setScore(question.getVoteScore());
            responseDto.setViewCount(question.getViewCount());
            responseDto.setAnswerCount(question.getAnswerCount());

            QuestionDto.UserInQuestion user = new QuestionDto.UserInQuestion();
            user.setDisplayName(question.getUser().getDisplayName());
            responseDto.setUser(user);

            responseDto.setTags(question.getQuestionTags().stream().map(
                    questionTag -> questionTag.getTag().getName()
            ).collect(Collectors.toList()));

            pageResponses.add(responseDto);
        }
        return pageResponses;
    }
}
