package padakmon.server.restDocs.user;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import padakmon.server.helper.StubData;
import padakmon.server.user.controller.UserJoinController;
import padakmon.server.user.dto.UserDto;
import padakmon.server.user.entity.User;
import padakmon.server.user.mapper.UserMapper;
import padakmon.server.user.service.UserJoinService;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = UserJoinController.class,
            excludeAutoConfiguration = SecurityAutoConfiguration.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class UserJoinTest {


    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private UserMapper mapper;

    @MockBean
    private UserJoinService userJoinService;

    @Test
    public void signUpTest() throws Exception {
        // given
//        UserDto.SignUp signUpDto = StubData.MockUser.getMockDtoSignUp();
//        String content = gson.toJson(signUpDto);
//
//        // when
//        given(mapper.userSignUpDtoToUser(any(UserDto.SignUp.class))).willReturn(new User());
//        doNothing().when(userJoinService).createUser(any());
//
//        // then
//        mockMvc.perform(
//                        post("/api/users")
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .accept(MediaType.APPLICATION_JSON)
//                                .content(content)
//                )
//                .andExpect(status().isCreated())
//                .andDo(document("SignUp",
//                        requestFields(
//                                fieldWithPath("displayName").type(JsonFieldType.STRING).description("닉네임"),
//                                fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
//                                fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
//                        )
//                ));
    }
}
