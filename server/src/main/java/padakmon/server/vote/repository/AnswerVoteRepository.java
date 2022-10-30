package padakmon.server.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import padakmon.server.answer.entity.Answer;
import padakmon.server.user.entity.User;
import padakmon.server.vote.entity.AnswerVote;

import java.util.Optional;

@Repository
public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
    Optional<AnswerVote> findByAnswerAndUser(Answer answer, User user);
}
