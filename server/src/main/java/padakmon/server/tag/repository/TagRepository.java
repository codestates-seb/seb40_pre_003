package padakmon.server.tag.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import padakmon.server.tag.entity.Tag;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    public Optional<Tag> findByName(String name);
    public Page<Tag> findByNameContaining(String name, Pageable pageable);
    @Query("SELECT t.description FROM Tag t WHERE t.name = :name")
    public String getDescription(@Param("name") String name);

    @Query("SELECT COUNT(t.tagId) FROM Tag t INNER JOIN t.questionTags qt INNER JOIN qt.question q WHERE t.tagId = :tagId AND q.createdAt >= :date")
    public long calculateQuestionAfterDate(@Param("tagId") long tagId, @Param("date") LocalDateTime date);
}
