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
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;
    @Lob
    private String body;
    //컨버터 필요
    private boolean answered;
    //score column 추가
    private int score = 0;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

}
