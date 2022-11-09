import { getPrettyDateAgo } from '../../util/getPrettyDateAgo';
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
  let asked = getPrettyDateAgo(new Date(testdata.createdAt));
  let modified = getPrettyDateAgo(new Date(testdata.modifiedAt));

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
            <FigureContent>{asked}</FigureContent>
          </Figure>
          <Figure>
            <FigureName>Modified</FigureName>
            <FigureContent>{modified}</FigureContent>
          </Figure>
          <Figure>
            <FigureName>Viewed</FigureName>
            <FigureContent>{`${testdata.viewCount} times`}</FigureContent>
          </Figure>
        </FiguresContainer>
      </Container>
    )
  );
}

export default QuestionHeader;
