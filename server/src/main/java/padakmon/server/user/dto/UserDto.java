package padakmon.server.user.dto;

import lombok.*;
import padakmon.server.dto.PageInfo;
import padakmon.server.tag.dto.TagDto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

public class UserDto {

    @Getter
    @Setter // for test
    public static class SignUp {
        @Size(min = 4, max = 15, message = "길이가 4이상 15이하여야 합니다.")
        @Pattern(regexp = "^(?=.*[a-zA-Z])[0-9a-zA-Z]*$", message = "영어 또는 영어+숫자의 조합만 입력할 수 있습니다.") // 영어 한개 이상 포함, 영어 또는 영어 + 숫자 모든 조합
        private String displayName;

        @Email
        @NotBlank
        @Size(max = 30, message = "길이가 30이하여야 합니다.")
        private String email;

        @NotBlank(message = "공백은 입력할 수 없습니다.")
        @Size(min = 8, max = 20, message = "길이가 8이상 20이하여야 합니다.")
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]*$", message = "영어와 숫자를 반드시 한 개 이상 포함해야 합니다.") // 영어 한개 이상 포함, 숫자 한개 이상 포함
        private String password;
    }

    @Getter
    @Setter // for test
    public static class Login {
        private String email;

        private String password;
    }

    @Getter
    @Setter
    public static class myPage { // 마이페이지 수정

        private byte[] image;

        @Size(min = 4, max = 15, message = "길이가 4이상 15이하여야 합니다.")
        @Pattern(regexp = "^(?=.*[a-zA-Z])[0-9a-zA-Z]*$", message = "영어 또는 영어+숫자의 조합만 입력할 수 있습니다.")
        private String name;

        @Size(max = 255, message = "255자까지 입력할 수 있습니다.")
        private String aboutMe;
    }

    @Getter
    @Setter
    public static class searchResponse {
        private String orderMode;
        private PageInfo pageInfo;
        private List<UserDto.Info> users = new ArrayList<>();
    }

    @Getter
    @Setter
    public static class Info {
        private Long userId;
        private String displayName;
        private Long answerCount;
        private List<String> tags = new ArrayList<>();
    }
}
