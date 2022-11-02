package padakmon.server.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import padakmon.server.tag.entity.Tag;

import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    public Optional<Tag> findByName(String name);
    @Query("SELECT t.description FROM Tag t WHERE t.name = :name")
    public String getDescription(@Param("name") String name);
}
