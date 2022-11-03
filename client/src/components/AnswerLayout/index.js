import Answers from './Answers';
import { Container, Count, Header } from './style';
import WriteAnswer from './WriteAnswer';

function AnswerLayout({ answers, questionId }) {
  return (
    answers && (
      <Container>
        <Header>
          <Count>{`${answers.length} Answers`}</Count>
        </Header>
        <Answers answers={answers} questionId={questionId} />
        <WriteAnswer />
      </Container>
    )
  );
}

export default AnswerLayout;
