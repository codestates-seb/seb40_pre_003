// ------------ SearchResult -------------
// 검색창에 검색을 하였을때 연관 질문들이 나올 페이지 화면

import styled from 'styled-components';
import QuestionsList from '../../components/Main/QuestionsList';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import SideBarWidget from '../../components/SideBarWidget';
// import { DummyData } from '../../components/Main/Data/DummyData';
// import Question from '../Question';
import { HomeHead, TopQuestionsTitle, Total } from '../Home/style';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 24px 0 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

// // 제목, 버튼, 링크 묶음
// const SearchResultsHead = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 0 0 0 20px;
// `;

// // 제목
// const SearchResultsTitle = styled.span`
//   font-size: 27px;
//   margin-top: 19.5px;
// `;

// // 질문작성 버튼
// const AskQuestionButton = styled(Link)`
//   text-align: center;
//   position: relative;
//   display: inline-block;
//   padding: 0.8em;
//   background-color: #0995ff;
//   font-size: 12.9px;
//   font-family: inherit;
//   font-weight: normal;
//   color: white;
//   width: 103px;
//   height: 37px;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
//   outline: none;
//   margin-top: 19.5px;
//   text-decoration-line: none;
//   cursor: pointer;
// `;

// AskQuestion 버튼옆에 Tip링크
const AdvancedTipButton = styled.a`
  color: #0074cc;
  font-size: 12.8px;
  width: 110px;
  margin-right: 20px;
  cursor: pointer;
`;

// ~에대한 검색결과 라는 문구
const AboutResult = styled.p`
  font-size: 12px;
  color: #6a737c;
  margin-bottom: 10px;
`;

// 질문 갯수
// const Total = styled.div`
//   margin: 20px 0 27px 23px;
//   font-size: 20px;
// `;

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const searchGen = useSelector((state) => state.searchReducer.searchGen);
  console.log(
    'SearchResults컴포 -> useSelector() -> searchGen 값 :',
    searchGen
  );

  useEffect(() => {
    axios
      .get(`/api/questions?query=${searchGen}&page=1&size=20&order=newest`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log('SearchResults컴포->axios요청 값 : ', res.data);
        setSearchResultsData(res.data);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log('error : ', error));
  }, [searchGen]);

  console.log('SearchResults컴포 -> searchResultsData : ', searchResultsData);

  return (
    <Container>
      <Main>
        <div>
          <HomeHead>
            {searchResultsData && (
              <TopQuestionsTitle>
                {searchResultsData.searchInfo.searchTitle}
              </TopQuestionsTitle>
            )}

            <div>
              <AdvancedTipButton>Advanced Search Tips</AdvancedTipButton>
              <AskQuestionButton />
            </div>
          </HomeHead>
        </div>
        <div>
          <Total>
            <AboutResult>Results for {searchGen}</AboutResult>
            <span>{totalCount} results</span>
          </Total>
        </div>
        <div>
          <QuestionsList homeData={searchResultsData}></QuestionsList>
        </div>
      </Main>
      <SideBarWidget />
    </Container>
  );
};

export default SearchResults;
