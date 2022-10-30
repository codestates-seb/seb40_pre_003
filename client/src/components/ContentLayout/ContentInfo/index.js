import WriterProfile from '../WriterProfile';
import { Button, Buttons, Container } from './style';

function ContentInfo({ time, user }) {
  return (
    <Container>
      <Buttons>
        <Button>Share</Button>
        <Button>Edit</Button>
        <Button>Follow</Button>
      </Buttons>
      <WriterProfile time={time} user={user} />
    </Container>
  );
}

export default ContentInfo;
