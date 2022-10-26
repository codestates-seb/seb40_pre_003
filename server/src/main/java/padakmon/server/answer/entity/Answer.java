package padakmon.server.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import padakmon.server.audit.Auditable;
import padakmon.server.question.entity.Question;
import padakmon.server.user.entity.User;
import padakmon.server.util.BooleanConverter;


import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;
    @Lob
    private String body;
    @Convert(converter = BooleanConverter.class) // Y/N <-> true/false
    private boolean answered;
    private int voteCount = 0;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

}
