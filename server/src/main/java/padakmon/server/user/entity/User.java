package padakmon.server.user.entity;

import lombok.Data;
import padakmon.server.audit.CreatedOnlyAuditable;

import javax.persistence.*;

@Data
@Entity
@Table(name = "USERS")
public class User extends CreatedOnlyAuditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String email;

    @Column(nullable = false, length = 20)
    private String password;

    // TODO: ERD length 변경 (20 -> 15)
    @Column(name = "DISPLAY_NAME", nullable = false, unique = true, length = 15)
    private String name;

    private int questionCount;

    private int answerCount;

    // TODO: ERD 추가
    private String aboutMe;

    // TODO: 연관관계 매핑, enum?(활동중, 삭제요청 등)

//    @Lob
//    private byte[] image;
}
