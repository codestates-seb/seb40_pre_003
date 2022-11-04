package padakmon.server.tag.service;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import padakmon.server.tag.entity.Tag;
import padakmon.server.tag.repository.TagRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TagService {
    private TagRepository tagRepository;

    public Tag createOrUpdate(String tagName) {
        //태그 이름 정제
        String trimmedName = tagName.toLowerCase().trim();
        Optional<Tag> optionalTag = tagRepository.findByName(trimmedName);
        if(optionalTag.isPresent()) {
            Tag verifiedTag = optionalTag.get();
            verifiedTag.addQuestionCountByOne();
            return tagRepository.save(verifiedTag);
        } else {
            Tag tag = new Tag();
            tag.setName(trimmedName);
            return tagRepository.save(tag);
        }
    }

    public Page<Tag> delegateFindTags(String query, int page, int size, Sort sort) {
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        Page<Tag> tags;
        if(query == null) {
            tags = tagRepository.findAll(pageRequest);
        } else {
            tags = tagRepository.findByNameContaining(query.trim(), pageRequest);
        }
        calculateQuestionsByDate(tags);

        return tags;
    }

    private void calculateQuestionsByDate(Page<Tag> tags) {
        tags.getContent().stream().forEach(
                tag -> {
                    tag.setQuestionCountWeek(getWeekCount(tag.getTagId()));
                    tag.setQuestionCountToday(getTodayCount(tag.getTagId()));
                }
        );
    }

    private long getTodayCount(long tagId) {
        LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.of(0, 0, 0));
        return tagRepository.calculateQuestionAfterDate(tagId, todayStart);
    }

    private long getWeekCount(long tagId) {
        LocalDateTime weekStart = LocalDateTime.of(LocalDate.now().minusWeeks(1), LocalTime.of(0, 0, 0));
        return tagRepository.calculateQuestionAfterDate(tagId, weekStart);
    }
}
