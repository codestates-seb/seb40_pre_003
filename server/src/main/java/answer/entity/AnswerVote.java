package answer.entity;

import audit.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import question.entity.Question;
import question.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class AnswerVote extends BaseEntity {
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
