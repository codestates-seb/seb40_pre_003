import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionsList from '../../components/Main/QuestionsList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NoSearch from '../NoSearch';

const Container = styled.div`
  display: flex;
  padding: 24px 24px 0 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionsTaggedHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 680px;
  margin: 0 0 0 20px;
`;

// 제목
const QuestionsTaggedTitle = styled.span`
  font-size: 27px;
  margin-top: 19.5px;
`;

// 질문작성 버튼
const AskQuestionButtonLink = styled(Link)`
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background-color: #0995ff;
  font-size: 12.9px;
  font-family: inherit;
  font-weight: normal;
  color: white;
  width: 103px;
  height: 37px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  margin-top: 19.5px;
  text-decoration-line: none;
  cursor: pointer;
`;

// 타이틀 아래 tag에 대한 기본 설명 텍스트
const AboutTag = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #6a737c;
  margin: 20px 0 10px 20px;
`;

// 질문 갯수
const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;

// tagDescription(String)(태그 설명 or null)

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
  // -> searchTag는 useSelector() 로 가져온 상태라서
  // useState처럼 상태가 변할때마다 렌더링을 시키지않아서
  // useEffect를 실행시키려면 searchTag가 바뀔때마다 실행시켜주는 조건으로 두번째인자로 넣어야함!

  return searchTag
    ? tagData && (
        <Container>
          <Main>
            <div>
              <QuestionsTaggedHead>
                <QuestionsTaggedTitle>
                  {tagData.searchInfo.searchTitle}
                </QuestionsTaggedTitle>
                <AskQuestionButtonLink to={'/questions/ask'}>
                  Ask Question
                </AskQuestionButtonLink>
              </QuestionsTaggedHead>
            </div>
            <div>
              <AboutTag>{tagData.searchInfo.tagDescription}</AboutTag>
              <Total>{totalCount} questions</Total>
            </div>
            <QuestionsList homeData={tagData}></QuestionsList>
          </Main>
        </Container>
      )
    : tagData && (
        <Container>
          <Main>
            <div>
              <QuestionsTaggedHead
                style={{ 'justify-Content': 'space-between' }}
              >
                <QuestionsTaggedTitle>
                  {tagData.searchInfo.searchTitle}
                </QuestionsTaggedTitle>
                <AskQuestionButtonLink to={'/questions/ask'}>
                  Ask Question
                </AskQuestionButtonLink>
              </QuestionsTaggedHead>
            </div>
            <div>
              <div>
                <AboutTag>그런 태그 없엉!</AboutTag>
                <Total>{totalCount} questions</Total>
              </div>
            </div>
            <NoSearch></NoSearch>
          </Main>
        </Container>
      );
};

export default QuestionsTagged;
