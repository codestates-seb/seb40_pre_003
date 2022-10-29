package padakmon.server.authority.utils;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;

import java.util.Map;

@Component
public class LoggedInUserInfoUtils {
    public Long extractUserId() {
        Map<String, Object> claims = (Map)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(claims == null) {
            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);
        }
        return ((Number)claims.get("userId")).longValue();
    }
}
