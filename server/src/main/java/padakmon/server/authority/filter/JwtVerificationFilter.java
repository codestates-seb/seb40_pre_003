package padakmon.server.authority.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import padakmon.server.authority.jwt.JwtTokenizer;
import padakmon.server.authority.utils.UserAuthorityUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter { // JWT 확인 후 권한 부여

    private final JwtTokenizer jwtTokenizer;
    private final UserAuthorityUtils userAuthorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer, UserAuthorityUtils userAuthorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.userAuthorityUtils = userAuthorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String encodedSecretKey = jwtTokenizer.encodeSecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.getClaims(jws, encodedSecretKey).getBody(); // request에서 claim 디코딩
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        List<GrantedAuthority> authorities = userAuthorityUtils.createAuthorities((List) claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(claims, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
