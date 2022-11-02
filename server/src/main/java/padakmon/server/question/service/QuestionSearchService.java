package padakmon.server.question.service;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import padakmon.server.exception.BusinessLogicException;
import padakmon.server.exception.ExceptionCode;
import padakmon.server.authority.utils.LoggedInUserInfoUtils;
import padakmon.server.question.dto.QuestionSearchDto;
import padakmon.server.question.entity.Question;
import padakmon.server.question.repository.QuestionRepository;
import padakmon.server.tag.repository.TagRepository;

@Service
@Transactional
@AllArgsConstructor
public class QuestionSearchService {

    private final QuestionRepository questionRepository;
    private final LoggedInUserInfoUtils userInfoUtils;
    private final TagRepository tagRepository;

    public Page<Question> findQuestions(int page, int size, Sort sort) {
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        return questionRepository.findAll(pageRequest);
    }


    public QuestionSearchDto.SearchInfo getSearchInfo(String query, QuestionSearchDto.SearchInfo searchInfo) {
        String trimmedQuery = query.trim();
        //태그 검색
        if(trimmedQuery.startsWith("tag:")) {
            trimmedQuery = query.substring(4);
            String tagDescription = tagRepository.getDescription(trimmedQuery);

            searchInfo.setSearchTitle("Questions tagged [" + trimmedQuery + "]");
            searchInfo.setTagDescription(tagDescription);
        }
        return searchInfo;
    }
    public String getOrderMode(String order) {
        if (Order.NEWEST.orderParam.equals(order)) {
            return Order.NEWEST.orderMode;
        } else if (Order.SCORE.orderParam.equals(order)) {
            return Order.SCORE.orderMode;
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_VALID_ORDER);
        }
    }

    public String getOrderModeDefault() {
        return Order.NEWEST.orderMode;
    }

    public Page<Question> delegateSearch(String query, int page, int size, Sort sort) {
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        String trimmedQuery = query.trim();
        //태그 검색
        if(trimmedQuery.startsWith("tag:")) {
            return tagSearch(trimmedQuery, pageRequest);
        }
        //유저 검색
        //user:mine or user:me (or any user id) returns only your posts (or only the posts from whichever user whose id you entered)
        if(trimmedQuery.startsWith("user:")) {
            return userSearch(trimmedQuery, pageRequest);
        }
        //답변이 몇 개 달렸는지에 따른 검색(0 =>  아무것도 달리지 않은, > 0이면 입력 값과 같거나 보다 큰)
        if(trimmedQuery.startsWith("answers:")) {
            return answerSearch(trimmedQuery, pageRequest);
        }
        //스코어와 같거나 큰
        if(trimmedQuery.startsWith("score:")) {
            return scoreSearch(trimmedQuery, pageRequest);
        }
        //아무것에도 해당하지 않으면 일반 검색
        return questionRepository.search(trimmedQuery, pageRequest);
    }

    private Page<Question> tagSearch(String query, PageRequest pageRequest) {
        return questionRepository.tagSearch(query.substring(4), pageRequest);
    }

    private Page<Question> userSearch(String query, PageRequest pageRequest) {
        String userQuery = query.substring(5);
        //나의 검색 결과 출력

        //mine이나 me인 경우, 로그인된 정보로 아이디 얻어오기
        Long userId = 0L;
        if(userQuery.equals("mine") || userQuery.equals("me")) {
            try {
                userId = userInfoUtils.extractUserId();
            } catch (BusinessLogicException e) {
                userId = 0L;
            }
        //그게 아닐 경우, 입력된 숫자로 검색
        } else {
            //쿼리 검색을 숫자로 변환
            try {
                userId = Long.parseLong(userQuery);
            } catch (NumberFormatException e) {
                //숫자로 변환 안될 경우, 일반 검색으로
                return questionRepository.search(query, pageRequest);
            }
        }
        return questionRepository.userSearch(userId, pageRequest);
    }

    private Page<Question> answerSearch(String query, PageRequest pageRequest) {
        //뒷따라 오는 숫자 파싱
        int num = 0;
        try {
            num = Integer.parseInt(query.substring(8));
        } catch (NumberFormatException e) {
            //숫자로 파싱 안되면 일반 검색
            return questionRepository.search(query, pageRequest);
        }
        //0이면 하나도 답변이 달리지 않은 게시글
        if(num == 0) {
            return questionRepository.unansweredSearch(pageRequest);
        //0보다 크면 입력된 숫자와 같거나 보다 많은 답변이 달린 게시글
        } else if (num > 0){
            return questionRepository.answeredNumberSearch(num, pageRequest);
        //음수면 일반 검색
        } else {
            return questionRepository.search(query, pageRequest);
        }
    }

    private Page<Question> scoreSearch(String query, PageRequest pageRequest) {
        //뒷따라 오는 숫자 파싱
        int num = 0;
        try {
            num = Integer.parseInt(query.substring(6));
        } catch (NumberFormatException e) {
            //숫자로 파싱 안되면 일반 검색
            return questionRepository.search(query, pageRequest);
        }

        return questionRepository.scoreSearch(num, pageRequest);
    }
}
