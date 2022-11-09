import userimg from '../../../assets/images/padakmon.png';
import { getPrettyTime } from '../../../util/getPrettyTime';
import { Container, Image, Name, Profile, Time } from './style';

function WriterProfile({ time, user, writerType }) {
  let newDate = new Date(time);
  let prettyTime = getPrettyTime(newDate);
  return (
    user && (
      <Container writerType={writerType}>
        <Time>{`${
          writerType === 'questioner' ? 'asked' : 'answered'
        } ${prettyTime}`}</Time>
        <Profile>
          <Image src={userimg} />
          <Name>{user.displayName}</Name>
        </Profile>
      </Container>
    )
  );
}

export default WriterProfile;
