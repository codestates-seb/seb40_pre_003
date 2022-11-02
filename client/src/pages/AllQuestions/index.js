// import { DummyData } from '../../components/Main/Data/DummyData';
import axios from 'axios';
import { useEffect, useState } from 'react';
import QuestionsList from '../../components/Main/QuestionsList';
import SideBarWidget from '../../components/SideBarWidget';
import {
  AllQuestionsHead,
  AllQuestionsTitle,
  AskQuestionButtonLink,
  Container,
  Main,
  Total,
} from './style';

const AllQuestions = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get('/api/questions', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log('res : ', res.data.questions);
        setHomeData(res.data.questions);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log('error : ', error));
  }, []);

  return (
    <Container>
      <Main>
        <div>
          <AllQuestionsHead>
            <AllQuestionsTitle>All Questions</AllQuestionsTitle>
            <AskQuestionButtonLink to={'/questions/ask'}>
              Ask Question
            </AskQuestionButtonLink>
          </AllQuestionsHead>
        </div>
        <Total>
          <span>{totalCount} questions</span>
          {/* <span>5 questions</span> */}
        </Total>
        <QuestionsList homeData={homeData}></QuestionsList>
      </Main>
      <SideBarWidget />
    </Container>
  );
};

export default AllQuestions;
