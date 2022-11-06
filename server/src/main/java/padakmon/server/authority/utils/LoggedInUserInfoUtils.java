package padakmon.server.authority.utils;

import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.util.Map;
import java.util.Optional;

@Component
@AllArgsConstructor
public class LoggedInUserInfoUtils {
    private UserRepository userRepository;
    public Long extractUserId() {
        Map<String, Object> claims;
        try {
            claims = (Map)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } catch (Exception e) {
            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);
        }
        return ((Number)claims.get("userId")).longValue();
    }
    public User extractUser() {
        long userId = extractUserId();
        User user = userRepository.findById(userId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return user;
    }

    public Optional<User> extractOptionalUser() {
        try {
            Map<String, Object> claims = (Map)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            long userId = ((Number)claims.get("userId")).longValue();
            return userRepository.findById(userId);
        } catch (Exception e) {
            return Optional.ofNullable(null);
        }
    }
}
