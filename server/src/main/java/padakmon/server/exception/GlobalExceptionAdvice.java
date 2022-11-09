package padakmon.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;

@RestControllerAdvice
public class GlobalExceptionAdvice {
    //Validation Exception
    @ExceptionHandler
    public ResponseEntity handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        return new ResponseEntity(ExceptionResponse.of(e), HttpStatus.BAD_REQUEST);
    }

    //Validation Exception
    @ExceptionHandler
    public ResponseEntity handleConstraintViolationException(ConstraintViolationException e) {
        return new ResponseEntity(ExceptionResponse.of(e), HttpStatus.BAD_REQUEST);
    }

    //다양한 비즤니스 에러
    @ExceptionHandler
    public ResponseEntity handleBusinessLogicException(BusinessLogicException e) {
        return new ResponseEntity(ExceptionResponse.of(e), HttpStatus.valueOf(e.getExceptionCode().getCode()));
    }
}
