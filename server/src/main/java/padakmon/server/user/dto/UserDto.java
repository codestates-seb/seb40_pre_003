package padakmon.server.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserDto {

    @Getter
    public static class SignUp {
        @Size(min = 4, max = 15, message = "길이는 4 ~ 15까지 허용")
        @Pattern(regexp = "^(?=.*[a-zA-Z])[0-9a-zA-Z]*$", message = "형식에 맞지 않음") // 영어 한개 이상 포함, 영어 또는 영어 + 숫자 모든 조합
        private String displayName;

        @Email
        @NotBlank
        @Size(max = 30)
        private String email;

        @NotBlank
        @Size(min = 8, max = 20)
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]*$") // 영어 한개 이상 포함, 숫자 한개 이상 포함
        private String password;
    }

    @Getter
    public static class Login {
        private String email;

        private String password;
    }

    @Getter
    @Setter
    public static class myPage { // 마이페이지 수정

//        private byte[] image;

        @Size(min = 4, max = 15, message = "길이는 4 ~ 15까지 허용")
        @Pattern(regexp = "^(?=.*[a-zA-Z])[0-9a-zA-Z]*$", message = "형식에 맞지 않음")
        private String name;

        // TODO 파일로 저장 or TEXT로 저장
        private String aboutMe;
    }
}
