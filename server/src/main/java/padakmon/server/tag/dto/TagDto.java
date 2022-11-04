package padakmon.server.tag.dto;

import lombok.Getter;
import lombok.Setter;
import padakmon.server.dto.PageInfo;

import java.util.ArrayList;
import java.util.List;

public class TagDto {
    @Getter
    @Setter
    public static class response {
        private String orderMode;
        private PageInfo pageInfo;
        private List<Info> tags = new ArrayList<>();
    }
    @Getter
    @Setter
    public static class Info {
        private String tagName;
        private String tagDescription;
        private long questionCountTotal;
        private long questionCountToday;
        private long questionCountWeek;
    }
}
