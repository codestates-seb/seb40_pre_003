package padakmon.server.tagRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import padakmon.server.tag.repository.TagRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;


@SpringBootTest
public class TagTest {
    @Autowired
    TagRepository tagRepository;
    @Test
    public void test() {
        LocalDateTime.of(LocalDate.now(), LocalTime.of(0, 0, 0));
        long actual = tagRepository.calculateQuestionAfterDate(1);
        Long expected = 1L;
        assertThat(actual, is(equalTo(expected)));
    }
}
