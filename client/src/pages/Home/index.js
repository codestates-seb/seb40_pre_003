// -----------  Home -----------
// Home || StackOverFlow 로고를 눌렀을때 기본적으로 보이게되는 페이지
// Top Questions(Title) , Ask Question(버튼), QuestionList(질문목록들)

import {
  HomeHead,
  TopQuestionsTitle,
  AskQuestionButtonLink,
  Total,
} from './style';
import QuestionsList from '../../components/Main/QuestionsList';
import { DummyData } from '../../components/Main/Data/DummyData';
// import { Link } from 'react';

const Home = () => {
  // const [totalCount, setTotalCount] = useState(DummyData);

  return (
    <div>
      <div>
        <HomeHead>
          <TopQuestionsTitle>Top Questions</TopQuestionsTitle>
          <AskQuestionButtonLink to={'/questions/ask'}>
            Ask Question
          </AskQuestionButtonLink>
        </HomeHead>
      </div>
      <Total>
        <span>5 questions</span>
      </Total>
      <QuestionsList dummy={DummyData}></QuestionsList>
    </div>
  );
};

export default Home;
