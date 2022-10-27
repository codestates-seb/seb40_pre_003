import styled from 'styled-components';
import QuestionsList from '../QuestionsList';
// import Question from '../Question';

const SearchResultsHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 20px;
`;

const SearchResultsTitle = styled.span`
  font-size: 27px;
  margin-top: 19.5px;
`;

const AskQuestionButton = styled.button`
  background-color: #0995ff;
  font-family: inherit;
  font-weight: bolder;
  color: white;
  width: 103px;
  height: 37px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  margin-top: 19.5px;
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

const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;

const SearchResults = () => {
  return (
    <div>
      <div>
        <SearchResultsHead>
          <SearchResultsTitle>Search Results</SearchResultsTitle>
          <div>
            <AdvancedTipButton>Advanced Search Tips</AdvancedTipButton>
            <AskQuestionButton>Ask Question</AskQuestionButton>
          </div>
        </SearchResultsHead>
      </div>
      <div>
        <Total>
          <AboutResult>Results for javascript</AboutResult>
          <span>5 results</span>
        </Total>
      </div>
      <div>
        <QuestionsList></QuestionsList>
      </div>
    </div>
  );
};

export default SearchResults;
