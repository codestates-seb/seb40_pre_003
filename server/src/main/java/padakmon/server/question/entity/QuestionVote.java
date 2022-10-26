package padakmon.server.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import padakmon.server.audit.Auditable;
import padakmon.server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class QuestionVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
