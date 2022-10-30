package padakmon.server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import padakmon.server.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
