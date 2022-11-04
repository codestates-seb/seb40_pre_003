package padakmon.server.answer.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import padakmon.server.answer.dto.AnswerDto;
import padakmon.server.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T19:14:11+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer postToEntity(AnswerDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContents( post.getContents() );

        return answer;
    }

    @Override
    public Answer patchToEntity(AnswerDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContents( patch.getContents() );

        return answer;
    }
}
