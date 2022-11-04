package padakmon.server.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import padakmon.server.question.entity.Question;
import padakmon.server.user.entity.User;
import padakmon.server.vote.entity.QuestionVote;

import java.util.Optional;

@Repository
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
    Optional<QuestionVote> findByQuestionAndUser(Question question, User user);
}
