package padakmon.server.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import padakmon.server.answer.entity.Answer;
import padakmon.server.audit.Auditable;
import padakmon.server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class AnswerVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
