import styled from 'styled-components';

const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;

const TopQuestions = styled.span`
  font-size: 27px;
  margin-top: 19.5px;
`;

const QuestionButton = styled.button`
  background-color: #0995ff;
  font-family: inherit;
  color: white;
  width: 103px;
  height: 37px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  margin-top: 19.5px;
`;

const Home = () => {
  return (
    <div>
      <div>
        <HomeHead>
          <TopQuestions>Top Questions</TopQuestions>
          <QuestionButton>Ask Question</QuestionButton>
        </HomeHead>
      </div>
    </div>
  );
};

export default Home;
