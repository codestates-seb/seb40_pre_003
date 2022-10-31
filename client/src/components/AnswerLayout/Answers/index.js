import ContentLayout from '../../ContentLayout';
import { Answer, Container } from './style';

function Answers({ answers }) {
  return (
    <Container>
      {answers &&
        answers.map((answer) => (
          <Answer key={answer.id}>
            <ContentLayout key={answer.id} testdata={answer} />
          </Answer>
        ))}
    </Container>
  );
}

export default Answers;
