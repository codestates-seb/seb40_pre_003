package padakmon.server.tag.mapper;

import org.mapstruct.Mapper;
import padakmon.server.dto.PageInfo;
import padakmon.server.tag.dto.TagDto;
import padakmon.server.tag.entity.Tag;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
    default TagDto.response tagsToResponse(String orderMode, PageInfo pageInfo, List<Tag> tags) {
        TagDto.response response = new TagDto.response();

        response.setOrderMode(orderMode);
        response.setPageInfo(pageInfo);

        List<TagDto.Info> infoList = tags.stream().map(
                tag -> {
                    TagDto.Info info = new TagDto.Info();
                    info.setTagName(tag.getName());
                    info.setTagDescription(tag.getDescription());
                    info.setQuestionCountTotal(tag.getQuestionCount());
                    info.setQuestionCountWeek(tag.getQuestionCountWeek());
                    info.setQuestionCountToday(tag.getQuestionCountToday());
                    return info;
                }
        ).collect(Collectors.toList());

        response.setTags(infoList);

        return response;
    }
}
