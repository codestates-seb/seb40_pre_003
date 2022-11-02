package padakmon.server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import padakmon.server.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByDisplayName(String displayName);
}
