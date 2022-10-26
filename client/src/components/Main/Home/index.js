import styled from 'styled-components';
import { HomeHead, TopQuestions, QuestionButton } from './style';
import QuestionsList from '../QuestionsList';
import Question from '../Question';
// const Sort = styled.

const Total = styled.div`
  margin: 20px 0 0 23px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <div>
      <div>
        <HomeHead>
          <TopQuestions>Top Questions</TopQuestions>
          <QuestionButton>Ask Question</QuestionButton>
        </HomeHead>
      </div>
      <Total>{} questions</Total>
      <QuestionsList></QuestionsList>
      <Question></Question>
    </div>
  );
};

export default Home;
