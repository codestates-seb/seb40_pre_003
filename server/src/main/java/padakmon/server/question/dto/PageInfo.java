package padakmon.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;
import padakmon.server.question.entity.Question;

@Getter
@AllArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private int totalElements;
    private int totalPages;

    public static PageInfo of(Page<Question> questionsPage, int page, int size) {
        return new PageInfo(page, size, (int) questionsPage.getTotalElements(), questionsPage.getTotalPages());
    }
}
