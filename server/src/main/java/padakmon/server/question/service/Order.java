package padakmon.server.question.service;

public enum Order {
    SCORE("score", "voteScore"),
    NEWEST("newest", "createdAt");

    String orderParam;
    String orderMode;

    Order(String orderParam, String orderMode) {
        this.orderParam = orderParam;
        this.orderMode = orderMode;
    }
}
