package padakmon.server.user.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.util.Optional;

@Service
@Transactional
public class UserJoinService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserJoinService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void createUser(User user) {
        verifyExistUser(user.getEmail(), user.getDisplayName());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        userRepository.save(user);
    }

    private void verifyExistUser(String email, String displayName) {
        Optional<User> findUserByEmail = userRepository.findByEmail(email);
        if (findUserByEmail.isPresent()) throw new BusinessLogicException("email", ExceptionCode.EMAIL_EXISTS, email);

        Optional<User> findUserByName = userRepository.findByDisplayName(displayName);
        if (findUserByName.isPresent()) throw new BusinessLogicException("displayName", ExceptionCode.DISPLAY_NAME_EXISTS, displayName);
    }
}
