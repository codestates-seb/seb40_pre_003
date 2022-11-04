package padakmon.server.authority.oauth;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import padakmon.server.user.entity.User;
import padakmon.server.user.repository.UserRepository;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {
    final private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        //OAuth2UserService : AccessToken을 사용하여 UserInfo endPoint로부터 사용자 정보를 OAuth2User의 형태로 얻어온다.
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        //이것으로부터 User받는다.
        OAuth2User oAuth2User = delegate.loadUser(userRequest);
        //어떤 프로바이더에게 인증의 위임했는지 확인(ex. Google)
        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName = userRequest.getClientRegistration()
                .getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();
        log.info("registrationId = {}", registrationId);
        log.info("userNameAttributeName = {}", userNameAttributeName);
        //우리에게 필요한 사용자 정보를 담는 객체. DB에 유저 정보
        CustomOAuthUser customOAuthUser = CustomOAuthUser.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());

        //최초 로그인이면 회원가입 아니면 정보 업데이트
        CustomOAuthUser user = saveIfNotExist(customOAuthUser);

        return user;
    }

    private CustomOAuthUser saveIfNotExist(CustomOAuthUser oAuthUser) {
        Optional<User> optionalUser = userRepository.findByEmail(oAuthUser.getEmail());
        User user;
        if(optionalUser.isPresent()) {
            user = optionalUser.get();
        } else {
            user = joinInSocialUser(oAuthUser);
        }
        oAuthUser.setUserId(user.getUserId());
        oAuthUser.setRoles(user.getRoles());
        return oAuthUser;
    }

    private User joinInSocialUser(CustomOAuthUser customOAuthUser) {
        User user = new User();
        user.setEmail(customOAuthUser.getEmail());
        user.setDisplayName(customOAuthUser.getDisplayName());
        user.setPassword(customOAuthUser.getPassword());
        return userRepository.save(user);
    }

    public static final class CustomOAuthUser extends User implements OAuth2User {
        private String attributeKey;
        private String name;
        private String picture;

        public CustomOAuthUser(String attributeKey, String name, String picture, String email) {
            this.attributeKey = attributeKey;
            this.name = name;
            this.picture = picture;
            super.setEmail(email);
            super.setPassword("socialLogin");
            super.setDisplayName(randomDisplayNameGenerator());
        }

        static CustomOAuthUser of(String provider, String attributeKey,
                                  Map<String, Object> attributes) {
            switch (provider) {
                case "google" :
                    return ofGoogle(attributeKey, attributes);
                case "kakao" :
                    return ofKakao("email", attributes);
                default:
                    throw new RuntimeException("Not a correct Provider");
            }
        }

        private static CustomOAuthUser ofGoogle(String attributeKey,
                                                Map<String, Object> attributes) {
            return new CustomOAuthUser(attributeKey, (String) attributes.get("name"),
                    (String)attributes.get("picture"), (String) attributes.get("email"));
        }

        private static CustomOAuthUser ofKakao(String attributeKey,
                                               Map<String, Object> attributes) {
            Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
            Map<String, Object> kakaoProfile = (Map<String, Object>) kakaoAccount.get("profile");

            return new CustomOAuthUser(attributeKey, (String) kakaoProfile.get("nickname"),
                    (String)kakaoProfile.get("profile_image_url"), (String) kakaoAccount.get("email"));
        }


        private String randomDisplayNameGenerator() {
            return "EatingPizza";
        }

        @Override
        public Map<String, Object> getAttributes() {
            Map<String, Object> map = new HashMap<>();
            map.put("id", attributeKey);
            map.put("key", attributeKey);
            map.put("name", name);
            map.put("email", super.getEmail());
            map.put("picture", picture);
            return null;
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
        }
    }
}
