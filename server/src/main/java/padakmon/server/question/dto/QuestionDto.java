package padakmon.server.question.dto;

import lombok.Getter;
import lombok.Setter;
import padakmon.server.answer.dto.AnswerDto;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @Setter
    static public class Patch {
        @NotBlank
        private String title;
        @NotBlank
        private String body;
        private List<String> tags;
    }
    @Getter
    @Setter
    static public class GetResponse {
        private String title;
        private String body;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private int score;
        private int viewCount;
        private int answerCount;
        private UserInQuestion user;
        private List<AnswerDto.Response> answers;
        private List<String> tags;
    }
    @Getter
    @Setter
    static public class UserInQuestion {
        private String displayName;
        //사진 같은 거 추가 예정
    }
    @Getter
    @Setter
    static public class Post {
        @NotBlank
        private String title;
        @NotBlank
        private String body;
        private List<String> tags;
    }

    @Setter
    @Getter
    static public class SuccessResponse {
        private long postId;
        private String message = "Posting the question was successful";
    }
}
