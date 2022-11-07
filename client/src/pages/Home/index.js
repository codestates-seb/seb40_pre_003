import QuestionsList from '../../components/Main/QuestionsList';
import { Container, HomeHead, Main, TopQuestionsTitle, Total } from './style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import SideBarWidget from '../../components/SideBarWidget';

const Home = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get('/api', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log('res : ', res.data);
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
