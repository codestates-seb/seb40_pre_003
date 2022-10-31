import VoteDownButton from '../Buttons/VoteDownButton';
import VoteUpButton from '../Buttons/VoteUpButton';
import { Container, VoteNum } from './style';

function VoteCell({ score }) {
  return (
    <Container>
      <VoteUpButton />
      <VoteNum>{score}</VoteNum>
      <VoteDownButton />
    </Container>
  );
}

export default VoteCell;
