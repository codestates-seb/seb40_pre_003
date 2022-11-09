package padakmon.server.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;

import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

//에러를 클라이언트에 전달하는 DTO
//of 메서드를 통해 여러 Exception 을 받아서 생성할 수 있다.
//필요하다면 of 메서드 overloading 해서 사용
//ExceptionInfo 는 어디에서 무엇이 왜 잘못했는지를 담고 있다.
//Constructor 를 통해 생성할 수 있다.
@Getter
@Setter
public class ExceptionResponse {
    private List<ExceptionInfo> exceptionInfos;

    private ExceptionResponse() {
    }

    public ExceptionResponse(List<ExceptionInfo> exceptionInfos) {
        this.exceptionInfos = exceptionInfos;
    }
    //custom한 businessLogic exception 처리 코드
    static public ExceptionResponse of(BusinessLogicException e) {
        ExceptionResponse response = new ExceptionResponse();
        response.setExceptionInfos(List.of(
                new ExceptionInfo(
                        e.getLocation(),
                        e.getRejectedValue() == null ? null : e.getRejectedValue().toString(),
                        e.getExceptionCode().getDescription()
                )
        ));
        return response;
    }

    static public ExceptionResponse of(MethodArgumentNotValidException e) {
        List<FieldError> errors = e.getBindingResult().getFieldErrors();
        return new ExceptionResponse(
                errors.stream().map(
                        exception -> new ExceptionInfo(
                              exception.getField(),
                              exception.getRejectedValue() == null ? null : exception.getRejectedValue().toString(),
                              exception.getDefaultMessage()
                        )
                ).collect(Collectors.toList()));
    }

    static public ExceptionResponse of(ConstraintViolationException e) {
        return new ExceptionResponse(
                e.getConstraintViolations().stream().map(
                        exception -> new ExceptionInfo(
                                exception.getPropertyPath().toString(),
                                exception.getInvalidValue().toString(),
                                exception.getMessage()
                        )
                ).collect(Collectors.toList())
        );
    }


    @AllArgsConstructor
    @Getter
    @Setter
    static public class ExceptionInfo {
        private String where;
        private String what;
        private String why;
    }
}
