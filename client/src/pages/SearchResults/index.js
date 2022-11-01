// ------------ SearchResult -------------
// 검색창에 검색을 하였을때 연관 질문들이 나올 페이지 화면

import styled from 'styled-components';
import QuestionsList from '../../components/Main/QuestionsList';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { DummyData } from '../../components/Main/Data/DummyData';
// import Question from '../Question';

// 제목, 버튼, 링크 묶음
const SearchResultsHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 20px;
`;

// 제목
const SearchResultsTitle = styled.span`
  font-size: 27px;
  margin-top: 19.5px;
`;

// 질문작성 버튼
const AskQuestionButton = styled(Link)`
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
const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  // const [params] = useSearchParams();
  // const search = params;
  // console.log('params : ', search);

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
        console.log('searchResultsResponse : ', res.data.questions);
        setSearchResultsData(res.data.questions);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log('error : ', error));
  }, []);

  return (
    <div>
      <div>
        <SearchResultsHead>
          <SearchResultsTitle>Search Results</SearchResultsTitle>
          <div>
            <AdvancedTipButton>Advanced Search Tips</AdvancedTipButton>
            <AskQuestionButton to={'/questions/ask'}>
              Ask Question
            </AskQuestionButton>
          </div>
        </SearchResultsHead>
      </div>
      <div>
        <Total>
          <AboutResult>Results for javascript</AboutResult>
          <span>{totalCount} results</span>
        </Total>
      </div>
      <div>
        {/* <QuestionsList dummy={DummyData}></QuestionsList> */}
        <QuestionsList homeData={searchResultsData}></QuestionsList>
      </div>
    </div>
  );
};

export default SearchResults;
