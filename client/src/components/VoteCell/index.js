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
  }, [nowScore]);

  const handleVote = (num) => {
    console.log("handleVote's uri:", uri);
    axios
      .post(
        uri,
        {
          vote: num,
        },
        {
          headers: {
            Authorization: localStorage.getItem('accesstoken'),
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === 'true') {
          setNowScore(nowScore + num);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <VoteUpButton handleVote={handleVote} />
      <VoteNum>{nowScore}</VoteNum>
      <VoteDownButton handleVote={handleVote} />
    </Container>
  );
}

export default VoteCell;
