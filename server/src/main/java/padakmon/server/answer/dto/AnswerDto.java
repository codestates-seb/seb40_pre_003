package padakmon.server.answer.dto;

import lombok.Getter;
import lombok.Setter;
import padakmon.server.question.dto.QuestionDto;

import javax.validation.constraints.NotBlank;

public class AnswerDto {
    @Getter
    @Setter
    static public class Post {
        @NotBlank
        private String contents;
    }

    @Getter
    @Setter
    static public class Patch {
        @NotBlank
        private String contents;
    }
    @Getter
    @Setter
    static public class Response {
        private String contents;
        private int score;
        private QuestionDto.UserInQuestion user;
    }
}
