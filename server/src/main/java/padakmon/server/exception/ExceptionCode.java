package padakmon.server.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExceptionCode {
    QUESTION_NOT_FOUND(404, "Question not found"),
    //오타수정
    며(404, "No authentication found in SecurityContextHolder");
    private int code;
    private String description;
}
