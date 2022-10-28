import { Link } from 'react-router-dom';
import { QuestionButton } from './style';

function AskQuestionButton() {
  return (
    <Link to="/questions/ask">
      <QuestionButton>Ask Question</QuestionButton>
    </Link>
  );
}

export default AskQuestionButton;
