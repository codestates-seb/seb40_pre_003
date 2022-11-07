import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import QuestionsList from '../../components/Main/QuestionsList';
import SideBarWidget from '../../components/SideBarWidget';
import {
  Container,
  HomeHead,
  Main,
  TopQuestionsTitle,
  Total,
} from '../Home/style';
import NoSearch from '../NoSearch';
import { AboutTagDiv, AboutTag } from './style';
const URL = process.env.REACT_APP_API_URL;

const QuestionsTagged = () => {
  const [tagData, setTagData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const searchTag = useSelector((state) => state.searchReducer.searchTag);

  useEffect(() => {
    axios
      .get(
        `${URL}/api/questions?query=tag:${searchTag}&page=1&size=20&order=score`,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      )
      .then((res) => {
        setTagData(res.data);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log(`error : `, error));
  }, [searchTag]);

  return (
    tagData && (
      <Container>
        <Main>
          <div>
            <HomeHead>
              <TopQuestionsTitle>
                {tagData.searchInfo.searchTitle}
              </TopQuestionsTitle>
              <AskQuestionButton />
            </HomeHead>
          </div>
          <div>
            <AboutTagDiv>
              <AboutTag>{tagData.searchInfo.tagDescription}</AboutTag>
            </AboutTagDiv>
            <Total>{totalCount} questions</Total>
          </div>
          {tagData.questions.length ? (
            <QuestionsList homeData={tagData}></QuestionsList>
          ) : (
            <NoSearch search={searchTag} />
          )}
        </Main>
        <SideBarWidget />
      </Container>
    )
  );
};

export default QuestionsTagged;
