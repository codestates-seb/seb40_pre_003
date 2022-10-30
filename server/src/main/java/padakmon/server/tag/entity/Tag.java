package padakmon.server.tag.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;
    @Column(unique = true)
    private String name;
    @Lob
    private String description;
    private int questionCount = 1;
    @OneToMany(mappedBy = "tag", fetch = FetchType.LAZY)
    private Set<QuestionTag> questionTags = new HashSet<>();

    public void addQuestionCountByOne() {
        this.questionCount++;
    }
    public void subtractQuestionCountByOne() {
        this.questionCount--;
    }
}
