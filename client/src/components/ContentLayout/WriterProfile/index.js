import { Container, Image, Name, Profile, Time } from './style';

function WriterProfile({ time, user }) {
  return (
    user && (
      <Container>
        <Time>{`asked ${time}`}</Time>
        <Profile>
          <Image />
          <Name>{user.displayName ? user.displayName : user}</Name>
        </Profile>
      </Container>
    )
  );
}

export default WriterProfile;
