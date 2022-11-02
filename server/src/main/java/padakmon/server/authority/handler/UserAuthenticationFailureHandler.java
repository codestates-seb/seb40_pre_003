package padakmon.server.authority.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import padakmon.server.authority.utils.ErrorResponseUtils;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationFailureHandler implements AuthenticationFailureHandler { // 로그인 인증 실패 시 작동
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        String message;
        HttpStatus status;

        if (exception instanceof UsernameNotFoundException) {
            message = "Email not found";
            status = HttpStatus.NOT_FOUND;

        } else if (exception instanceof BadCredentialsException) {
            message = "Password not Matched";
            status = HttpStatus.UNAUTHORIZED;
        } else {
            message = "Unknown Error.";
            status = HttpStatus.FORBIDDEN;
        }
        ErrorResponseUtils.sendErrorResponse(response, status, message);
        log.warn("# Authentication failed: {}", message);
    }
}