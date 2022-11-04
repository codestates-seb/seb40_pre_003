package padakmon.server.vote.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.answer.entity.Answer;
import padakmon.server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerVote{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerVoteId;
    //투표하면서 answer의 voteCount 변경 ->  persist
    //AnswerVote -> Answer 조회할 필요 없음
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
    //AnswerVote -> User 조회할 필요 없음
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "USER_ID")
    private User user;
    private int voteCount = 0;
    public void voteUp() {
        this.voteCount++;
    }

    public void voteDown() {
        this.voteCount--;
    }
}
