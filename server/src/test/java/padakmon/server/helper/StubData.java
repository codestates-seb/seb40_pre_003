package padakmon.server.helper;

import padakmon.server.user.dto.UserDto;

public class StubData {

    public static class MockUser {
        public static UserDto.SignUp getMockDtoSignUp() {
            UserDto.SignUp signUpDto = new UserDto.SignUp();
            signUpDto.setDisplayName("padakmon");
            signUpDto.setEmail("padakmon@gmail.com");
            signUpDto.setPassword("padak1234");
            return signUpDto;
        }

        public static UserDto.Login getMockDtoLogin() {
            UserDto.Login loginDto = new UserDto.Login();
            loginDto.setEmail("padakmon@gmail.com");
            loginDto.setPassword("padak1234");
            return loginDto;
        }
    }
}
