import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
const URL = process.env.REACT_APP_API_URL;

const AboutTagDiv = styled.div`
  width: 700px;
`;

// 타이틀 아래 tag에 대한 기본 설명 텍스트
const AboutTag = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #6a737c;
  margin: 20px 0 10px 20px;
`;

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
      .get(
        `${URL}/api/questions?query=tag:${searchTag}&page=1&size=20&order=score`,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      )
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
  // -> searchTag는 useSelector() 로 가져온 상태라서
  // useState처럼 상태가 변할때마다 렌더링을 시키지않아서
  // useEffect를 실행시키려면 searchTag가 바뀔때마다 실행시켜주는 조건으로 두번째인자로 넣어야함!

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
