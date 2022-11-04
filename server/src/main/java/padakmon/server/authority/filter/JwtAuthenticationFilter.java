package padakmon.server.authority.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import padakmon.server.authority.jwt.JwtTokenizer;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter { // 인증된 USER에게 JWT 발행

    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenizer = jwtTokenizer;
    }

    @SneakyThrows // 예외 처리
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

        ObjectMapper objectMapper = new ObjectMapper(); // 역직렬화
        UserDto.Login loginDto = objectMapper.readValue(request.getInputStream(), UserDto.Login.class);

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
        return authenticationManager.authenticate(authenticationToken); // 인증 위임
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain filterChain, Authentication authentication) throws IOException {
        User user = (User) authentication.getPrincipal();

        String accessToken = delegateAccessToken(user);
        String refreshToken = delegateRefreshToken(user);

        response.setHeader("AccessToken", "Bearer " + accessToken);
        response.setHeader("RefreshToken", refreshToken);
        response.setHeader("Id", String.valueOf(user.getUserId()));
        response.setHeader("DisplayName", String.valueOf(user.getDisplayName()));
    }

    private String delegateAccessToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getUserId());
        claims.put("userEmail", user.getEmail());
        claims.put("roles", user.getRoles());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String encodedSecretKey = jwtTokenizer.encodeSecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateAccessToken(claims, subject, expiration, encodedSecretKey);
    }

    private String delegateRefreshToken(User user) {
        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String encodedSecretKey = jwtTokenizer.encodeSecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateRefreshToken(subject, expiration, encodedSecretKey);
    }
}
