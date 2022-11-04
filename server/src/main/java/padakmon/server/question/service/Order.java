package padakmon.server.question.service;

public enum Order {
    SCORE("score", "voteScore"),
    NEWEST("newest", "createdAt"),
    NAME("name", "tagName"),
    POPULAR("popular", "questionCount");

    public String orderParam;
    public String orderMode;

    Order(String orderParam, String orderMode) {
        this.orderParam = orderParam;
        this.orderMode = orderMode;
    }

    public static String getOrderMode(String orderParam) {
        if(orderParam == null) {
            return NEWEST.orderMode;
        }
        String orderMode = null;
        switch(orderParam) {
            case "score":
                orderMode = SCORE.orderMode;
            case "newest":
                orderMode = NEWEST.orderMode;
            case "name":
                orderMode = NAME.orderMode;
            case "popular":
                orderMode = POPULAR.orderMode;

        }
        return orderMode;
    }
}
