package padakmon.server.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import padakmon.server.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Page<Question> findAll(Pageable pageable);

    @Query(value = "SELECT q FROM Question q WHERE q.title LIKE %:query% OR q.body LIKE %:query%")
    Page<Question> search(@Param("query") String query, Pageable pageable);

    @Query(value = "SELECT q FROM Question q INNER JOIN q.questionTags qt INNER JOIN qt.tag t WHERE t.name = :query")
    Page<Question> tagSearch(@Param("query") String query, Pageable pageable);

    @Query(value = "SELECT q FROM Question q INNER JOIN q.user u WHERE u.userId = :query")
    Page<Question> userSearch(@Param("query") long query, Pageable pageable);

    @Query(value = "SELECT q FROM Question q WHERE q.answerCount = 0")
    Page<Question> unansweredSearch(Pageable pageable);

    @Query(value = "SELECT q FROM Question q WHERE q.answerCount >= :number")
    Page<Question> answeredNumberSearch(@Param("number") int number, Pageable pageable);

    @Query(value = "SELECT q FROM Question q WHERE q.voteScore >= :number")
    Page<Question> scoreSearch(@Param("number") int number, Pageable pageable);

}
