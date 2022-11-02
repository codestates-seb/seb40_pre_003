import ContentLayout from '../../ContentLayout';
import { Answer, Container } from './style';

function Answers({ questionId, answers }) {
  return (
    <Container>
      {answers &&
        answers.map((answer) => (
          <Answer key={answer.answerId}>
            <ContentLayout
              key={answer.answerId}
              testdata={answer}
              questionId={questionId}
              answerId={answer.answerId}
            />
          </Answer>
        ))}
    </Container>
  );
}

export default Answers;
