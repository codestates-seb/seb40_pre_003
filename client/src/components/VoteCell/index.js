import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLogin } from '../../util/isLogin';

import VoteDownButton from '../Buttons/VoteDownButton';
import VoteUpButton from '../Buttons/VoteUpButton';
import { Container, VoteNum } from './style';

function VoteCell({ questionId, score, answerId }) {
  const navigate = useNavigate();
  const [nowScore, setNowScore] = useState(score);
  let uri;
  useEffect(() => {
    if (answerId) {
      uri = `/api/questions/${questionId}/answers/${answerId}/votes`;
    } else {
      uri = `/api/questions/${questionId}/votes`;
    }
  }, [nowScore]);

  const handleVote = (num) => {
    // console.log("handleVote's uri:", uri);
    if (isLogin()) {
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
    } else {
      // alert('You need to log in.');
      if (window.confirm('You need to log in.')) {
        navigate('/login');
      }
    }
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
