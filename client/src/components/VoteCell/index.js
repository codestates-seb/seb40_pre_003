import axios from 'axios';
import { useEffect, useState } from 'react';

import VoteDownButton from '../Buttons/VoteDownButton';
import VoteUpButton from '../Buttons/VoteUpButton';
import { Container, VoteNum } from './style';

function VoteCell({ questionId, score, answerId }) {
  const [nowScore, setNowScore] = useState(score);
  let uri;
  useEffect(() => {
    if (answerId) {
      uri = `/questions/${questionId}/answers/${answerId}/votes`;
    } else {
      uri = `/questions/${questionId}/votes`;
    }
  }, []);

  const vote = (num) => {
    axios
      .post(uri, {
        vote: num,
      })
      .then((res) => console.log(res));
    setNowScore(nowScore + num);
  };
  const handleVoteUp = () => {
    vote(1);
  };
  const handleVoteDown = () => {
    vote(-1);
  };
  return (
    <Container>
      <VoteUpButton handleVoteUp={handleVoteUp} />
      <VoteNum>{nowScore}</VoteNum>
      <VoteDownButton handleVoteDown={handleVoteDown} />
    </Container>
  );
}

export default VoteCell;
