package padakmon.server.user.entity;

import lombok.Getter;
import lombok.Setter;
import padakmon.server.audit.CreatedOnlyAuditable;

import javax.persistence.*;
import java.security.Principal;
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
    private String name;

    private int questionCount;

    private int answerCount;

    private String aboutMe;

    // TODO: 연관관계 매핑, enum?(활동중, 삭제요청 등), CASCADE

//    @Lob
//    private byte[] image;

    @ElementCollection(fetch = FetchType.EAGER) // 별도의 테이블을 생성하여 컬렉션 관리
    private List<String> roles = List.of("USER");

    @Override
    public String getName() {
        return getEmail();
    }
}
