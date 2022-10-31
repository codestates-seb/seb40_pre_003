package padakmon.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class QuestionSearchDto {
    private String orderMode;

    private PageInfo pageInfo;
    private List<QuestionDto.GetResponse> questions;

    public QuestionSearchDto(List<QuestionDto.GetResponse> questions) {
        this.questions = questions;
    }

    public QuestionSearchDto(PageInfo pageInfo, List<QuestionDto.GetResponse> questions) {
        this.questions = questions;
        this.pageInfo = pageInfo;
    }
}

