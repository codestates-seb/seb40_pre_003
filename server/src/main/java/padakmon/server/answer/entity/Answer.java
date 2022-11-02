package padakmon.server.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import padakmon.server.audit.Auditable;
import padakmon.server.question.entity.Question;
import padakmon.server.user.entity.User;
import padakmon.server.util.BooleanConverter;
import padakmon.server.vote.entity.AnswerVote;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    private boolean answered;
    private int voteScore;
    //Answer을 등록하면서 Quesation의 AnswerCount를 up해주기 때문에 persist
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    //Answer를 등록하면서 User의 AnswerCount를 올려주기 때문에 persit
    //Answer이 조회될 때, 항상 User도 같이 표시 되기 떄문에 eager
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
    private User user;
    //Answer가 사라지면서 연결된 Vote 제거
    @OneToMany(mappedBy = "answer", cascade = CascadeType.REMOVE)
    private List<AnswerVote> answerVotes = new ArrayList<>();

    public void scoreUp() {
        this.voteScore++;
    }
    public void scoreDown() {
        this.voteScore--;
    }
}
