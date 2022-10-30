package padakmon.server.answer.mapper;

import org.mapstruct.Mapper;
import padakmon.server.answer.dto.AnswerDto;
import padakmon.server.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    public Answer postToEntity(AnswerDto.Post post);
    public Answer patchToEntity(AnswerDto.Patch patch);
}
