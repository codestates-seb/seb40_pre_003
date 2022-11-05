package padakmon.server.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.tag.entity.QuestionTag;
import padakmon.server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionView {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionViewId;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Override
    public int hashCode() {
        int hashOfUser;
        int hashOfQuestion;
        if(question == null) {
            hashOfQuestion = -10000031;
        } else {
            hashOfQuestion = question.hashCode();
        }
        if(user == null) {
            hashOfUser = -10031;
        } else {
            hashOfUser = user.hashCode();
        }
        int digit = (int) Math.log(hashOfQuestion) + 1;
        int hashCode = hashOfQuestion + hashOfUser * (int) Math.pow(10, digit);
        return hashCode;
    }

    @Override
    public boolean equals(Object obj) {
        if(this == null && obj == null) return true;
        if(this == null && obj != null || this != null && obj == null) return false;
        return this.hashCode() == obj.hashCode();
    }
}
