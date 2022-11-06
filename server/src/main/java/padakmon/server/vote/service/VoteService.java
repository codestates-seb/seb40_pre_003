package padakmon.server.vote.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import padakmon.server.answer.entity.Answer;
import padakmon.server.answer.service.AnswerService;
import padakmon.server.authority.utils.LoggedInUserInfoUtils;
import padakmon.server.question.entity.Question;
import padakmon.server.question.service.QuestionService;
import padakmon.server.user.entity.User;
import padakmon.server.vote.dto.VoteDto;
import padakmon.server.vote.entity.AnswerVote;
import padakmon.server.vote.entity.QuestionVote;
import padakmon.server.vote.repository.AnswerVoteRepository;
import padakmon.server.vote.repository.QuestionVoteRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class VoteService {
    private AnswerVoteRepository answerVoteRepository;
    private QuestionService questionService;
    private QuestionVoteRepository questionVoteRepository;
    private AnswerService answerService;
    private LoggedInUserInfoUtils userInfoUtils;

    public VoteDto.Response answerCountUp(long answerId) {
        //이 회원이 이 답변에 누른 vote 객체 추출. 없으면 새로 만듦
        AnswerVote answerVote = getAnswerVote(answerId);
        //이미 좋아요 눌렀다면, 더 이상 누르지 못함
        if(answerVote.getVoteCount() >= 1) {
            return new VoteDto.Response("false", "Already voted up");
        //싫어요를 눌렀다면, 싫어요 취소
        } else if(answerVote.getVoteCount() <= -1) {
            answerVote.voteUp();
            answerScore(answerVote.getAnswer(), 1);
            //유저 voteCount -1
            answerVote.getUser().voteDown();
            answerVoteRepository.save(answerVote);
            return new VoteDto.Response("true", "Canceled voting down");
        //아무것도 누른 적 없는 경우, 좋아요 누름
        } else {
            answerVote.voteUp();
            answerScore(answerVote.getAnswer(), 1);
            //유저 voteCount +1
            answerVote.getUser().voteUp();
            answerVoteRepository.save(answerVote);
            return new VoteDto.Response("true", "Voted up successfully");
        }
    }

    public VoteDto.Response answerCountDown(long answerId) {
        //이 회원이 이 답변에 누른 vote 객체 추출. 없으면 새로 만듦
        AnswerVote answerVote = getAnswerVote(answerId);
        //이미 좋아요 눌렀다면, 좋아요 취소
        if(answerVote.getVoteCount() >= 1) {
            answerVote.voteDown();
            answerScore(answerVote.getAnswer(), -1);
            //유저 voteCount -1
            answerVote.getUser().voteDown();
            answerVoteRepository.save(answerVote);
            return new VoteDto.Response("true", "Canceled voting up");
        //이미 싫어요를 눌렀다면, 또 누르지 못함
        } else if(answerVote.getVoteCount() <= -1) {
            return new VoteDto.Response("false", "Already voted down");
        //아무것도 누른 적 없는 경우, 싫어요 누름
        } else {
            answerVote.voteDown();
            answerScore(answerVote.getAnswer(), -1);
            //유저 voteCount +1
            answerVote.getUser().voteUp();
            answerVoteRepository.save(answerVote);
            return new VoteDto.Response("true", "Voted down successfully");
        }
    }

    private AnswerVote getAnswerVote(long answerId) {
        //회원 추출
        User user = userInfoUtils.extractUser();
        //Answer 객체 얻기
        Answer answer = answerService.verifyAnswer(answerId);
        //이 회원이 이 답변에 누른 vote 객체 추출. 없으면 새로 만듦
        Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findByAnswerAndUser(answer, user);
        if(optionalAnswerVote.isPresent()) {
            return optionalAnswerVote.get();
        } else {
            AnswerVote answerVote = new AnswerVote();
            answerVote.setAnswer(answer);
            answerVote.setUser(user);
            return answerVote;
        }
    }

    public VoteDto.Response questionCountUp(long questionId) {
        //이 회원이 이 답변에 누른 vote 객체 추출. 없으면 새로 만듦
        QuestionVote questionVote = getQuestionVote(questionId);
        //이미 좋아요 눌렀다면, 더 이상 누르지 못함
        if(questionVote.getVoteCount() >= 1) {
            return new VoteDto.Response("false", "Already voted up");
            //싫어요를 눌렀다면, 싫어요 취소
        } else if(questionVote.getVoteCount() <= -1) {
            questionVote.voteUp();
            questionScore(questionVote.getQuestion(), 1);
            //유저 voteCount -1
            questionVote.getUser().voteDown();
            questionVoteRepository.save(questionVote);
            return new VoteDto.Response("true", "Canceled voting down");
            //아무것도 누른 적 없는 경우, 좋아요 누름
        } else {
            questionVote.voteUp();
            questionScore(questionVote.getQuestion(), 1);
            //유저 voteCount +1
            questionVote.getUser().voteUp();
            questionVoteRepository.save(questionVote);
            return new VoteDto.Response("true", "Voted up successfully");
        }
    }

    public VoteDto.Response questionCountDown(long questionId) {
        //이 회원이 이 답변에 누른 vote 객체 추출. 없으면 새로 만듦
        QuestionVote questionVote = getQuestionVote(questionId);
        //이미 좋아요 눌렀다면, 좋아요 취소
        if(questionVote.getVoteCount() >= 1) {
            questionVote.voteDown();
            questionScore(questionVote.getQuestion(), -1);
            //유저 voteCount -1
            questionVote.getUser().voteDown();
            questionVoteRepository.save(questionVote);
            return new VoteDto.Response("true", "Canceled voting up");
            //이미 싫어요를 눌렀다면, 또 누르지 못함
        } else if(questionVote.getVoteCount() <= -1) {
            return new VoteDto.Response("false", "Already voted down");
            //아무것도 누른 적 없는 경우, 싫어요 누름
        } else {
            questionVote.voteDown();
            questionScore(questionVote.getQuestion(), -1);
            //유저 voteCount +1
            questionVote.getUser().voteUp();
            questionVoteRepository.save(questionVote);
            return new VoteDto.Response("true", "Voted down successfully");
        }
    }

    private QuestionVote getQuestionVote(long questionId) {
        //회원 추출
        User user = userInfoUtils.extractUser();
        //Question 객체 얻기
        Question question = questionService.readAndViewCount(questionId);
        //이 회원이 이 답변에 누른 vote 객체 추출. 없으면 새로 만듦
        Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findByQuestionAndUser(question, user);
        if(optionalQuestionVote.isPresent()) {
            return optionalQuestionVote.get();
        } else {
            QuestionVote questionVote = new QuestionVote();
            questionVote.setQuestion(question);
            questionVote.setUser(user);
            return questionVote;
        }
    }

    private void questionScore(Question question, int upOrDown) {
        if(upOrDown >= 0) {
            question.scoreUp();
        } else {
            question.scoreDown();
        }
    }

    private void answerScore(Answer answer, int upOrDown) {
        if(upOrDown >= 0) {
            answer.scoreUp();
        } else {
            answer.scoreDown();
        }
    }
}
