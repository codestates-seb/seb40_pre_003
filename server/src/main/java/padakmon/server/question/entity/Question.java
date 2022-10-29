package padakmon.server.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.audit.Auditable;
import padakmon.server.tag.entity.QuestionTag;
import padakmon.server.user.entity.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    private String title;
    @Lob
    private String body;
    private int score = 0;
    private int answerCount = 0;
    private int viewCount = 0;
    //질문저장할 때, 유저의 질문 카운트를 올려줘야함
    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "USER_ID")
    private User user;
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<QuestionVote> questionVotes = new HashSet<>();
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<QuestionTag> questionTags = new HashSet<>();

}
