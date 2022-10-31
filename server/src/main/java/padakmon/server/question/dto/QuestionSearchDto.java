package padakmon.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class QuestionSearchDto {
    private PageInfo pageInfo;
    private List<QuestionDto.GetResponse> questions;
}

