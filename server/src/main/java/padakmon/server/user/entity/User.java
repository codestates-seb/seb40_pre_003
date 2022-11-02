package padakmon.server.user.entity;

import lombok.Getter;
import lombok.Setter;
import padakmon.server.answer.entity.Answer;
import padakmon.server.audit.CreatedOnlyAuditable;
import padakmon.server.question.entity.Question;

import javax.persistence.*;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "USERS")
public class User extends CreatedOnlyAuditable implements Principal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "DISPLAY_NAME", nullable = false, unique = true, length = 15)
    private String displayName;

    private int questionCount;

    private int answerCount;

    private String aboutMe;

    @Lob
    private byte[] image;

    @ElementCollection(fetch = FetchType.EAGER) // 별도의 테이블을 생성하여 컬렉션 관리
    private List<String> roles = List.of("USER");

    //유저가 삭제되면, 관련 질문과 답변도 삭제됨
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();


    @Override
    public String getName() {
        return getEmail();
    }
}
