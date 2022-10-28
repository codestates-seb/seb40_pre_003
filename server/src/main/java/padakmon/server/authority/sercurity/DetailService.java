package padakmon.server.authority.sercurity;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import padakmon.server.authority.utils.UserAuthorityUtils;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.util.Collection;
import java.util.Optional;

@Component
@Slf4j
public class DetailService implements UserDetailsService {

    private final UserRepository userRepository;
    private final UserAuthorityUtils userAuthorityUtils;

    public DetailService(UserRepository userRepository, UserAuthorityUtils userAuthorityUtils) {
        this.userRepository = userRepository;
        this.userAuthorityUtils = userAuthorityUtils;
    }

    // TODO Exception
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findByEmail(username);
        User user = optionalUser.orElseThrow(() -> new RuntimeException("이메일이 존재하지 않습니다."));

        return new DetailsForUser(user);
    }

    private final class DetailsForUser extends User implements UserDetails { // User 정보

        public DetailsForUser(User user) {
            setId(user.getId());
            setEmail(user.getEmail());
            setName(user.getName());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return userAuthorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}

