package padakmon.server.user.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import padakmon.server.tag.entity.Tag;
import padakmon.server.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByDisplayName(String displayName);

    public Page<User> findByDisplayNameContaining(String displayName, Pageable pageable);

}
