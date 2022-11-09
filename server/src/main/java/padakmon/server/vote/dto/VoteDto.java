package padakmon.server.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import padakmon.server.util.validator.PlusOneOrMinusOne;

public class VoteDto {
    @Getter
    @Setter
    static public class Post {
        @PlusOneOrMinusOne
        private int vote;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    static public class Response {
        private String success;

        private String message;
    }
}
