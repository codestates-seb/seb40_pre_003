import { Container, Main, HomeHead, TopQuestionsTitle } from '../../Home/style';
import AskQuestionButton from '../../../components/Buttons/AskQuestionButton';
import SideBarWidget from '../../../components/SideBarWidget';
import styled from 'styled-components';
import SearchTipText from './SearchTipText';
import { TipDummy } from '../../../components/Main/TipData/TipDummy';

const TipInfoDiv = styled.div`
  padding: 40px 0 0 24px;
  margin-bottom: 100px;
`;
const TypeSnytaxTitleDiv = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  font-size: 16px;
  font-weight: bolder;
  border-bottom: 1px solid black;
  div {
    margin-right: 30px;
  }
`;

const SearchTip = () => {
  return (
    <Container>
      <Main>
        <HomeHead>
          <TopQuestionsTitle>Advanced Search Tips</TopQuestionsTitle>
          <AskQuestionButton></AskQuestionButton>
        </HomeHead>
        <TipInfoDiv>
          <TypeSnytaxTitleDiv>
            <div>Search type</div>
            <div>Search syntax</div>
          </TypeSnytaxTitleDiv>
          {TipDummy.map((el) => (
            <SearchTipText key={el.id} data={el} />
          ))}
        </TipInfoDiv>
      </Main>
      <SideBarWidget></SideBarWidget>
    </Container>
  );
};

export default SearchTip;
