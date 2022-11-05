import { Link } from 'react-router-dom';
import { isLogin } from '../../../util/isLogin';
import { QuestionButton } from './style';

function AskQuestionButton() {
  let to;
  if (isLogin()) {
    to = '/questions/ask';
  } else {
    to = '/login';
  }
  return (
    <Link to={to}>
      <QuestionButton>Ask Question</QuestionButton>
    </Link>
  );
}

export default AskQuestionButton;
