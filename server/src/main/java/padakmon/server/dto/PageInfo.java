package padakmon.server.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

@Getter
@AllArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private int totalElements;
    private int totalPages;

    public static PageInfo of(Page<?> pageObject, int page, int size) {
        return new PageInfo(page, size, (int) pageObject.getTotalElements(), pageObject.getTotalPages());
    }
}
