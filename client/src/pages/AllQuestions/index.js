// import { DummyData } from '../../components/Main/Data/DummyData';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import Pagination from 'react-js-pagination';

import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import QuestionsList from '../../components/Main/QuestionsList';
import SideBarWidget from '../../components/SideBarWidget';
import {
  AllQuestionsHead,
  AllQuestionsTitle,
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

  // const handlePageChange = () => {
  //   console.log('changed!');
  // };

  return (
    <Container>
      <Main>
        <div>
          <AllQuestionsHead>
            <AllQuestionsTitle>All Questions</AllQuestionsTitle>
            <AskQuestionButton />
          </AllQuestionsHead>
        </div>
        <Total>
          <span>{totalCount} questions</span>
        </Total>
        <QuestionsList homeData={homeData}></QuestionsList>
        {/* <>PAGINATION</> */}
        {/* <Pagination
          activePage={1}
          itemsCountPerPage={5}
          totalItemsCount={300}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        /> */}
      </Main>
      <SideBarWidget />
    </Container>
  );
};

export default AllQuestions;
