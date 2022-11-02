import { AnswerButton } from './style';

function PostAnswerButton({ handlePostAnswer }) {
  return (
    <AnswerButton onClick={handlePostAnswer}>Post Your Answer</AnswerButton>
  );
}

export default PostAnswerButton;
