import QuestionsList from '../../components/Main/QuestionsList';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AskQuestionButton from '../../components/Buttons/AskQuestionButton';
import SideBarWidget from '../../components/SideBarWidget';
import {
  Container,
  HomeHead,
  Main,
  TopQuestionsTitle,
  Total,
} from '../Home/style';
import NoSearch from '../NoSearch';
import { AboutResult, AdvancedTipButton } from './style';
const URL = process.env.REACT_APP_API_URL;

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const searchGen = useSelector((state) => state.searchReducer.searchGen);

  useEffect(() => {
    axios
      .get(
        `${URL}/api/questions?query=${encodeURIComponent(
          searchGen
        )}&page=1&size=20&order=newest`,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      )
      .then((res) => {
        setSearchResultsData(res.data);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log('error : ', error));
  }, [searchGen]);

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
                <AdvancedTipButton to="/search/tip">
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
