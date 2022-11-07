package padakmon.server.user.service;

import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.authority.utils.LoggedInUserInfoUtils;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class UserPageService {

    private final UserRepository userRepository;
    private final LoggedInUserInfoUtils userInfoUtils;

    @Transactional(readOnly = true)
    public User findUser(long userId) {
        return findVerifiedUser(userId);
    }

    private User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    public User updateUser(User user, long userId) {
        User authorizedUser = verifySameUser(userId);
        authorizedUser.setDisplayName(user.getDisplayName());
        authorizedUser.setImage(user.getImage());
        authorizedUser.setAboutMe(user.getAboutMe());

        return userRepository.save(authorizedUser);
    }

    private User verifySameUser(long userId) {
        User authorizedUser = userInfoUtils.extractUser();

        if (userId != authorizedUser.getUserId()) {
            throw new BusinessLogicException("Editing my page", ExceptionCode.UNAUTHORIZED_USER, String.valueOf(userId));
        }
        return authorizedUser;
    }

    @SneakyThrows
    public Page<User> delegateFindUsers(String query, int page, int size, Sort sort) {
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        Page<User> users;
        if (query == null) {
            users = userRepository.findAll(pageRequest);
        } else {
            query = URLDecoder.decode(query, "UTF-8");
            users = userRepository.findByDisplayNameContaining(query.trim(), pageRequest);
        }
        return users;
    }
}
