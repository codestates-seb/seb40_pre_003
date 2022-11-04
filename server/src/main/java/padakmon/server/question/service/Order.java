package padakmon.server.question.service;

public enum Order {
    SCORE("score", "voteScore"),
    NEWEST("newest", "createdAt"),
    NAME("name", "tagName"),
    POPULAR("popular", "questionCount"),
    REPUTATION("reputation", "questionCount"),
    VOTERS("voters", "voteCount");

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
                break;
            case "newest":
                orderMode = NEWEST.orderMode;
                break;
            case "name":
                orderMode = NAME.orderMode;
                break;
            case "popular":
                orderMode = POPULAR.orderMode;
                break;
            case "reputation":
                orderMode = REPUTATION.orderMode;
                break;
            case "voters":
                orderMode = VOTERS.orderMode;
                break;
        }
        return orderMode;
    }
}

