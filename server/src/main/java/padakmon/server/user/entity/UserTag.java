package padakmon.server.user.entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.tag.entity.Tag;
import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class UserTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
