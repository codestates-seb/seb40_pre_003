package padakmon.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@AllArgsConstructor
@Getter
public class QuestionSearchDto {
    private String orderMode;
    private SearchInfo searchInfo;
    private PageInfo pageInfo;
    private List<QuestionDto.GetResponse> questions;

    public QuestionSearchDto(List<QuestionDto.GetResponse> questions) {
        this.questions = questions;
    }

    public QuestionSearchDto(PageInfo pageInfo, List<QuestionDto.GetResponse> questions) {
        this.questions = questions;
        this.pageInfo = pageInfo;
    }

    @AllArgsConstructor
    @Getter
    @NoArgsConstructor
    @Setter
    public static class SearchInfo {
        private String searchTitle = "Search Results";
        private String tagDescription;
    }
}

