package padakmon.server.tag.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.audit.Auditable;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Tag extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(unique = true)
    private String name;

    @Lob
    private String description;

    private Long questionCount = 1L;

    private Long questionCountWeek;

    private Long questionCountToday;

    @OneToMany(mappedBy = "tag")
    private Set<QuestionTag> questionTags = new HashSet<>();

    public void addQuestionCountByOne() {
        this.questionCount++;
    }
    public void subtractQuestionCountByOne() {
        this.questionCount--;
    }
}
