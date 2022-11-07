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
import { AdvancedTipButton, AboutResult } from './style';

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
