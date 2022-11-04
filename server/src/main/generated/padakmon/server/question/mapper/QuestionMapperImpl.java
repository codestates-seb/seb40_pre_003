package padakmon.server.question.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import padakmon.server.question.dto.QuestionDto;
import padakmon.server.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T10:28:24+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question postToEntity(QuestionDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( post.getTitle() );
        question.setBody( post.getBody() );

        return question;
    }

    @Override
    public Question patchToEntity(QuestionDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( patch.getTitle() );
        question.setBody( patch.getBody() );

        return question;
    }
}
