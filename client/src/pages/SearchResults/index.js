// ------------ SearchResult -------------
// 검색창에 검색을 하였을때 연관 질문들이 나올 페이지 화면

import styled from 'styled-components';
import QuestionsList from '../../components/Main/QuestionsList';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SideBarWidget from '../../components/SideBarWidget';
import {
  HomeHead,
  TopQuestionsTitle,
  Total,
  Container,
  Main,
} from '../Home/style';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import NoSearch from '../NoSearch';
import { Link } from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
//   padding: 24px 24px 0 0;
// `;

// const Main = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// AskQuestion 버튼옆에 Tip링크
const AdvancedTipButton = styled(Link)`
  color: #0074cc;
  font-size: 12.8px;
  width: 110px;
  margin-right: 20px;
  text-decoration-line: none;
  cursor: pointer;
`;

// ~에대한 검색결과 라는 문구
const AboutResult = styled.p`
  font-size: 12px;
  color: #6a737c;
  margin-bottom: 10px;
`;

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
    searchResultsData && (
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
                <AdvancedTipButton to="/searchtip">
                  Advanced Search Tips
                </AdvancedTipButton>
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
            {searchResultsData.questions.length ? (
              <QuestionsList homeData={searchResultsData}></QuestionsList>
            ) : (
              <NoSearch search={searchGen} />
            )}
          </div>
        </Main>
        <SideBarWidget />
      </Container>
    )
  );
};

export default SearchResults;
