package padakmon.server.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExceptionCode {
    QUESTION_NOT_FOUND(404, "Question not found"),
    USER_NOT_FOUND(404, "User not found"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    AUTHENTICATION_NOT_FOUND(404, "No authentication found in SecurityContextHolder"),
    EMAIL_EXISTS(409, "Email already exists"),
    DISPLAY_NAME_EXISTS(409, "Display name already exists"),
    NOT_A_WRITER(403, "You are not write this"),
    NOT_VALID_ORDER(400, "Order not valid"),
    UNAUTHORIZED_USER(401,"You are Unauthorized");
    private int code;
    private String description;
}
