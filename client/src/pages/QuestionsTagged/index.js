import QuestionsList from '../../components/Main/QuestionsList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import {
  Container,
  Main,
  HomeHead,
  TopQuestionsTitle,
  Total,
} from '../Home/style';
import SideBarWidget from '../../components/SideBarWidget';
import NoSearch from '../NoSearch';
import { AboutTagDiv, AboutTag } from './style';

const QuestionsTagged = () => {
  const [tagData, setTagData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const searchTag = useSelector((state) => state.searchReducer.searchTag);

  console.log(
    'QuestionsTagged컴포 -> 최상단 axios요청직전 useSelector()로 받아온 searchTag',
    searchTag
  );
  useEffect(() => {
    axios
      .get(`/api/questions?query=tag:${searchTag}&page=1&size=20&order=score`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log(
          'QuestionsTagged컴포 -> axios로 get요청 api/param : ',
          `/api/questions?query=tag:${searchTag}&page=1&size=20&order=score`
        );
        console.log(
          'QuestionsTagged컴포->axios요청 값 : ',
          res.data.searchInfo.tagDescription
        );

        setTagData(res.data);
        console.log(
          'QuestionsTagged컴포 -> axios요청값을 setTagData에 넣은 tagData 값 : ',
          tagData
        );
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
