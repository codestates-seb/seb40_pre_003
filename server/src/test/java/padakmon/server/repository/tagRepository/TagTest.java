package padakmon.server.repository.tagRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import padakmon.server.tag.repository.TagRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;


@DataJpaTest
public class TagTest {
    @Autowired
    TagRepository tagRepository;
    @Test
    public void test() {
        LocalDateTime now = LocalDateTime.of(LocalDate.now(), LocalTime.of(0, 0, 0));
        long actual = tagRepository.calculateQuestionAfterDate(1L, now);
        Long expected = 2L;
        assertThat(actual, is(equalTo(expected)));
    }
}
