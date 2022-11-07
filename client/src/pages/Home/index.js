import axios from 'axios';
import { useEffect, useState } from 'react';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import QuestionsList from '../../components/Main/QuestionsList';
import SideBarWidget from '../../components/SideBarWidget';
import { Container, HomeHead, Main, TopQuestionsTitle, Total } from './style';
const URL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/api`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then((res) => {
        setHomeData(res.data);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log('error : ', error));
  }, []);

  return (
    <Container>
      <Main>
        <div>
          <HomeHead>
            <TopQuestionsTitle>Top Questions</TopQuestionsTitle>
            <AskQuestionButton />
          </HomeHead>
        </div>
        <Total>
          <span>{totalCount} questions</span>
        </Total>
        <QuestionsList homeData={homeData}></QuestionsList>
      </Main>
      <SideBarWidget />
    </Container>
  );
};

export default Home;
