import AskQuestionButton from '..//Buttons/AskQuestionButton';
import {
  Container,
  Figure,
  FigureContent,
  FigureName,
  FiguresContainer,
  Title,
  TitleContainer,
} from './style';

function QuestionHeader({ testdata }) {
  return (
    testdata && (
      <Container>
        <TitleContainer>
          <Title>{testdata.title}</Title>
          <AskQuestionButton />
        </TitleContainer>
        <FiguresContainer>
          <Figure>
            <FigureName>Asked</FigureName>
            <FigureContent>today</FigureContent>
          </Figure>
          <Figure>
            <FigureName>Modified</FigureName>
            <FigureContent>today</FigureContent>
          </Figure>
          <Figure>
            <FigureName>Viewed</FigureName>
            <FigureContent>{`${testdata.views} times`}</FigureContent>
          </Figure>
        </FiguresContainer>
      </Container>
    )
  );
}

export default QuestionHeader;
