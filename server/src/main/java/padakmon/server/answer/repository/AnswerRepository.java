package padakmon.server.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import padakmon.server.answer.entity.Answer;
import padakmon.server.question.entity.Question;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    public List<Answer> findAllByQuestion(Question question);
}
