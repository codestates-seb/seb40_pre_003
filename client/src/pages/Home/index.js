import styled from 'styled-components';
import { HomeHead, TopQuestionsTitle, AskQuestionButton } from './style';
import QuestionsList from '../../components/Main/QuestionsList';
import { DummyData } from '../../components/Main/Data/DummyData';
import { useState } from 'react';

// 질문글 갯수
const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;

const Home = () => {
  const [totalCount, setTotalCount] = useState(DummyData);

  return (
    <div>
      <div>
        <HomeHead>
          <TopQuestionsTitle>Top Questions</TopQuestionsTitle>
          <AskQuestionButton>Ask Question</AskQuestionButton>
        </HomeHead>
      </div>
      <Total>
        <span>{totalCount.length} questions</span>
      </Total>
      <QuestionsList></QuestionsList>
    </div>
  );
};

export default Home;
