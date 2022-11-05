import { isLogin } from '../../../util/isLogin';
import { AnswerButton } from './style';

function PostAnswerButton({ handlePostAnswer }) {
  return (
    <AnswerButton
      disabled={`${isLogin() ? '' : 'disabled'}`}
      onClick={handlePostAnswer}
    >
      Post Your Answer
    </AnswerButton>
  );
}

export default PostAnswerButton;
