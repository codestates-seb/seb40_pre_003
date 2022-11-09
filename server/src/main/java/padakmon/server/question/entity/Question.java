package padakmon.server.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;
import padakmon.server.answer.entity.Answer;
import padakmon.server.audit.Auditable;
import padakmon.server.tag.entity.QuestionTag;
import padakmon.server.user.entity.User;
import padakmon.server.vote.entity.QuestionVote;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    private String title;

    @Lob
    private String body;
    private int voteScore;

    private int answerCount;

    private int viewCount;

    //질문저장할 때, 유저의 질문 카운트를 올려줘야함 => Persist
    //질문 조회할 때, 항상 유저도 같이 조회
    @ManyToOne(targetEntity = User.class, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "USER_ID")
    private User user;

    //질문이 삭제되면 투표도 삭제되어야.
    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Set<QuestionVote> questionVotes = new HashSet<>();

    //질문 생성하면서 태그도 같이 생성 및 업데이트
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    private Set<QuestionTag> questionTags = new HashSet<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Set<Answer> answers = new HashSet<>();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.MERGE})
    private Set<QuestionView> questionViews = new HashSet<>();

    public void scoreUp() {
        this.voteScore++;
    }
    public void scoreDown() {
        this.voteScore--;
    }
    public void viewUp() {this.viewCount++;}

    public void addQuestionView(QuestionView questionView) {
        this.questionViews.add(questionView);
    }

    @Override
    public int hashCode() {
        return Math.toIntExact(this.questionId);
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
}
