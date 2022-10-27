package padakmon.server.authority.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;

public class ErrorResponseUtils {
    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status) {
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
    }
}
