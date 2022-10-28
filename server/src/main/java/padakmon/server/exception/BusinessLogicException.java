package padakmon.server.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class BusinessLogicException extends RuntimeException{
    private String location;
    private ExceptionCode exceptionCode;
    private String rejectedValue;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        this.exceptionCode = exceptionCode;
    }

    public BusinessLogicException(ExceptionCode exceptionCode, String rejectedValue) {
        this.exceptionCode = exceptionCode;
        this.rejectedValue = rejectedValue;
    }


}
