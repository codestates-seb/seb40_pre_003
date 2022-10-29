package padakmon.server.vote.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.answer.entity.Answer;
import padakmon.server.audit.Auditable;
import padakmon.server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerVote implements Vote{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerVoteId;
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
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
