// import { DummyData } from '../../components/Main/Data/DummyData';
import {
  AllQuestionsHead,
  AllQuestionsTitle,
  AskQuestionButtonLink,
  Total,
} from './style';
import QuestionsList from '../../components/Main/QuestionsList';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
    <div>
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
    </div>
  );
};

export default AllQuestions;
