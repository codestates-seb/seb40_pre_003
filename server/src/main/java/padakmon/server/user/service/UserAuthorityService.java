package padakmon.server.user.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.util.Optional;

@Service
@Transactional
public class UserAuthorityService {

    private final UserRepository userRepository;

    public UserAuthorityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(User user) {
        verifyExistUser(user.getEmail(), user.getName());
        userRepository.save(user);
    }

    private void verifyExistUser(String email, String name) {
        Optional<User> findUserByEmail = userRepository.findByEmail(email);
        if (findUserByEmail.isPresent()) throw new RuntimeException("Email already exists");

        Optional<User> findUserByName = userRepository.findByName(name);
        if (findUserByName.isPresent()) throw new RuntimeException("Display name already exists");
    }
}
