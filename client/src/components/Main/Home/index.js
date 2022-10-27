import styled from 'styled-components';
import { HomeHead, TopQuestions, QuestionButton } from './style';
import QuestionsList from '../QuestionsList';

// 질문글 갯수
const Total = styled.div`
  margin: 20px 0 27px 23px;
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
      <Total>
        <span>5 questions</span>
      </Total>
      <QuestionsList></QuestionsList>
    </div>
  );
};

export default Home;
