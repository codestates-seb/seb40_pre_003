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
const URL = process.env.REACT_APP_API_URL;

const AllQuestions = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [homeData, setHomeData] = useState(null);

  const [totalElements, setTotalElements] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${URL}/api/questions${
          page ? `?page=${page}` : ''
        }&size=15&order=newest`,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      )
      .then((res) => {
        setHomeData(res.data);
        setTotalCount(res.data.pageInfo.totalElements);
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
