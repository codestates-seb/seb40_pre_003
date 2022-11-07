package padakmon.server.service.questionSearchService;

import org.junit.jupiter.api.Test;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

public class QueryTest {

    @Test
    void URLDecoding() throws UnsupportedEncodingException {
        String query = "%26%2350504%3B%26%2345397%3B"; // s3에서 '안녕'을 파라미터로 넘기고 인코딩된 것

        String q = URLDecoder.decode(query, "UTF-8"); // 디코딩
        System.out.println(q); // &#50504;&#45397; -> HTML 용으로 변환됨

        String search = "안녕";
        String encoding = URLEncoder.encode(search, "UTF-8"); // '안녕' 인코딩 -> %EC%95%88%EB%85%95
        System.out.println(encoding);

        String decoding = URLDecoder.decode(encoding, "UTF-8"); // 다시 디코딩 -> '안녕'
        System.out.println(decoding);
    }
}
