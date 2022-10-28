package padakmon.server.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

public class QuestionDto {
    @Getter
    @Setter
    static public class Post {
        @NotBlank
        private String title;
        @NotBlank
        private String body;
        private List<String> tags = new ArrayList<>();
    }

    @Setter
    @Getter
    static public class PostSuccessResponse {
        private long postId;
        private String message = "Posting the question was successful";
    }
    static public class Response {
        private long postId;
        private String title;

    }
}
