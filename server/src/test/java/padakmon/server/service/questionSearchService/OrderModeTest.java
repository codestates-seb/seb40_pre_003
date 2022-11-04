package padakmon.server.service.questionSearchService;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.question.service.QuestionSearchService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
public class OrderModeTest {

    @InjectMocks
    private QuestionSearchService questionSearchService;

    @Test
    public void newestTest() {
        String orderParam = "newest";
        String orderMode = questionSearchService.getOrderMode(orderParam);
        assertEquals(orderMode, "createdAt");
    }

    @Test
    public void scoreTest() {
        String orderParam = "score";
        String orderMode = questionSearchService.getOrderMode(orderParam);
        assertEquals(orderMode, "voteScore");
    }

    @Test
    public void nameTest() {
        String orderParam = "name";
        String orderMode = questionSearchService.getOrderMode(orderParam);
        assertEquals(orderMode, "tagName");
    }

    @Test
    public void popularTest() {
        String orderParam = "popular";
        String orderMode = questionSearchService.getOrderMode(orderParam);
        assertEquals(orderMode, "questionCount");
    }

    @Test
    public void exceptionTest() {
        String orderParam = "for exception";
        assertThrows(BusinessLogicException.class, () -> questionSearchService.getOrderMode(orderParam));
    }
}
