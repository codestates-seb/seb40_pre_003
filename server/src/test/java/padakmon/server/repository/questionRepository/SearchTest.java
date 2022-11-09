package padakmon.server.repository.questionRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import padakmon.server.question.entity.Question;
import padakmon.server.question.repository.QuestionRepository;

@DataJpaTest
public class SearchTest {
    @Autowired
    private QuestionRepository questionRepository;
    @Test
    public void search() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("createdAt"));
        Page<Question> response = questionRepository.search("hi", pageRequest);
        System.out.println(response.getContent().get(0).getTitle());
    }

    @Test
    public void tagSearch() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("createdAt"));
        Page<Question> response = questionRepository.tagSearch("java", pageRequest);
        System.out.println(response.getContent().get(0).getTitle());
    }
    @Test
    public void userSearch() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("createdAt"));
        Page<Question> response = questionRepository.userSearch(1, pageRequest);
        System.out.println(response.getContent().get(0).getTitle());
    }

    @Test
    public void unansweredSearch() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("createdAt"));
        Page<Question> response = questionRepository.unansweredSearch(pageRequest);
        System.out.println(response.getContent().get(0).getTitle());
    }

    @Test
    public void answeredNumberSearch() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("createdAt"));
        Page<Question> response = questionRepository.answeredNumberSearch(1, pageRequest);
        System.out.println(response.getContent().get(0).getTitle());
    }

}
