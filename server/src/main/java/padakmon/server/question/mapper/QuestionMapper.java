package padakmon.server.question.mapper;

import org.mapstruct.Mapper;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postToEntity(QuestionDto.Post post);
    default QuestionDto.PostSuccessResponse EntityToSuccessResponse(Question question) {
        QuestionDto.PostSuccessResponse response = new QuestionDto.PostSuccessResponse();
        response.setPostId(question.getQuestionId());
        return response;
    }

}
