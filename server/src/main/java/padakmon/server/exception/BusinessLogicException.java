package padakmon.server.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class BusinessLogicException extends RuntimeException{
    private ExceptionCode exceptionCode;
    private String rejectedValue;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        this.exceptionCode = exceptionCode;
    }

}
