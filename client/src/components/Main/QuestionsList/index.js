import Question from '../Question';
import { Container } from './style';

const QuestionsList = ({ homeData }) => {
  console.log('QuestionList컴포->homeData :', homeData);
  return (
    <Container>
      {homeData &&
        homeData.questions.map((el) => (
          <Question key={el.questionId} list={el} />
        ))}
    </Container>
  );
};

export default QuestionsList;
