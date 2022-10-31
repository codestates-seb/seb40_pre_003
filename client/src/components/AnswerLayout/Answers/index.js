import ContentLayout from '../../ContentLayout';
import { Answer, Container } from './style';

function Answers({ questionId, answers }) {
  return (
    <Container>
      {answers &&
        answers.map((answer) => (
          <Answer key={answer.id}>
            <ContentLayout
              key={answer.id}
              testdata={answer}
              questionId={questionId}
              answerId={answer.id}
            />
          </Answer>
        ))}
    </Container>
  );
}

export default Answers;
