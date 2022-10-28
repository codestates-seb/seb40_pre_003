package padakmon.server.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExceptionCode {
    QUESTION_NOT_FOUND(404, "Question not found");
    private int code;
    private String description;
}
