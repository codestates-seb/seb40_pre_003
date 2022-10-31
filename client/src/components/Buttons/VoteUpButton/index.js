import { Button } from './style';

function VoteUpButton({ handleVoteUp }) {
  return (
    <Button onClick={handleVoteUp}>
      <svg width="36" height="36">
        <path d="M2 25h32L18 9 2 25Z" fill="currentColor"></path>
      </svg>
    </Button>
  );
}

export default VoteUpButton;
