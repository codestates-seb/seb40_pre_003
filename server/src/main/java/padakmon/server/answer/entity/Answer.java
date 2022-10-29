package padakmon.server.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
@NoArgsConstructor
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;
    @Lob
    private String contents;
    @Convert(converter = BooleanConverter.class) // Y/N <-> true/false
    private boolean answered = false;
    private int score = 0;
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
    private User user;

    public void scoreUp() {
        this.score++;
    }
    public void scoreDown() {
        this.score--;
    }
}
