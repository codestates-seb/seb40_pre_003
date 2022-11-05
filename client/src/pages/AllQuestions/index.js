// import { DummyData } from '../../components/Main/Data/DummyData';
import axios from 'axios';
import { useEffect, useState } from 'react';

import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import QuestionsList from '../../components/Main/QuestionsList';
import PaginationBar from '../../components/PaginationBar';
import SideBarWidget from '../../components/SideBarWidget';
import {
  Container,
  HomeHead,
  Main,
  TopQuestionsTitle,
  Total,
} from '../Home/style';
import { PaginationContainer } from './style';

const AllQuestions = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [homeData, setHomeData] = useState(null);

  const [totalElements, setTotalElements] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://ec2-3-37-123-253.ap-northeast-2.compute.amazonaws.com:8080/api/questions${
          page ? `?page=${page}` : ''
        }&size=15&order=newest`,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      )
      .then((res) => {
        // console.log('res : ', res.data);
        setHomeData(res.data);
        setTotalCount(res.data.questions.length);

        setTotalPage(res.data.pageInfo.totalPages);
        setTotalElements(res.data.pageInfo.totalElements);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.log('error : ', error));
  }, [page]);

  const handlePageChange = (e) => {
    setPage(e);
  };

  return (
    <Container>
      <Main>
        <div>
          <HomeHead>
            <TopQuestionsTitle>All Questions</TopQuestionsTitle>
            <AskQuestionButton />
          </HomeHead>
        </div>
        <Total>
          <span>{totalCount} questions</span>
        </Total>
        <QuestionsList homeData={homeData}></QuestionsList>
        <PaginationContainer>
          <PaginationBar
            page={page}
            totalElements={totalElements}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </PaginationContainer>
      </Main>
      <SideBarWidget />
    </Container>
  );
};

export default AllQuestions;
