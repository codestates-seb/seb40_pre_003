package padakmon.server.vote.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.audit.Auditable;
import padakmon.server.question.entity.Question;
import padakmon.server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionVote implements Vote{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
    private int voteCount = 0;

    @Override
    public void voteUp() {
        this.voteCount++;
    }

    @Override
    public void voteDown() {
        this.voteCount--;
    }
}
