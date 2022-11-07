package padakmon.server.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import padakmon.server.authority.filter.JwtAuthenticationFilter;
import padakmon.server.authority.filter.JwtVerificationFilter;
import padakmon.server.authority.handler.UserAccessDeniedHandler;
import padakmon.server.authority.handler.UserAuthenticationEntryPoint;
import padakmon.server.authority.handler.UserAuthenticationFailureHandler;
import padakmon.server.authority.jwt.JwtTokenizer;
import padakmon.server.authority.oauth.CustomOAuth2UserService;
import padakmon.server.authority.oauth.OAuth2SuccessHandler;
import padakmon.server.authority.sercurity.DetailService;
import padakmon.server.authority.utils.UserAuthorityUtils;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final UserAuthorityUtils userAuthorityUtils;
    private final DetailService detailService;
    private final OAuth2SuccessHandler oAuth2SuccessHandler;
    private final CustomOAuth2UserService customOAuth2UserService;

    @Value("${config.domain}")
    private String domain;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize ->
                        authorize.antMatchers(HttpMethod.POST, "api/questions/**").hasRole("USER")
                                .antMatchers(HttpMethod.PATCH, "api/questions/**").hasRole("USER")
                                .antMatchers(HttpMethod.DELETE, "api/questions/**").hasRole("USER")
                                .anyRequest().permitAll()
                )
                .oauth2Login()
                .successHandler(oAuth2SuccessHandler)
                .userInfoEndpoint().userService(customOAuth2UserService);



        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() { // CORS 정책
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("*"));
//        configuration.setAllowedOrigins(List.of(domain)); // TODO 배포시 S3로 변경
        configuration.setAllowedMethods(List.of("GET", "POST", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*", "Authorization"));
        configuration.setAllowCredentials(true);
        configuration.setExposedHeaders(List.of("AccessToken", "RefreshToken", "Id", "DisplayName"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity httpSecurity) {
            AuthenticationManager authenticationManager = httpSecurity.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/api/auth/login");
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, userAuthorityUtils);

            httpSecurity.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(detailService);
        authenticationProvider.setHideUserNotFoundExceptions(false);
        return authenticationProvider;
    }

}
