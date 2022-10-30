package padakmon.server.tag.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import padakmon.server.tag.entity.Tag;
import padakmon.server.tag.repository.TagRepository;

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
}
