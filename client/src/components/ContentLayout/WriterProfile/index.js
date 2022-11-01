import { Container, Image, Name, Profile, Time } from './style';

function getPrettyTime(dateObj) {
  let dateStr = new Date(dateObj).toJSON();
  const [date, time] = dateStr.split('T');
  // console.log(date, time);
  let months = [
    0,
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [year, month, day] = date.split('-');
  const [hour, min] = time.split(':').slice(0, 2);

  let nowTime = new Date().getTime();
  let postedTime = dateObj.getTime();

  let secDiff = Math.floor((nowTime - postedTime) / 1000);
  if (secDiff < 60) {
    return `${secDiff} seconds ago`;
  }
  let minDiff = Math.floor(secDiff / 60);
  if (minDiff < 60) {
    return `${minDiff} minute${minDiff === 1 ? '' : 's'} ago`;
  }
  let hourDiff = Math.floor(minDiff / 60);

  if (hourDiff < 24) {
    return `${hourDiff} hour${hourDiff === 1 ? '' : 's'} ago`;
  }
  let dayDiff = Math.floor(hourDiff / 24);
  if (dayDiff === 1) {
    return `yesterday`;
  } else if (dayDiff === 2) {
    return `2 days ago`;
  } else if (dayDiff <= 365) {
    return `${months[month]} ${day} at ${hour}:${min}`;
  }

  return `${months[month]} ${day}, ${year} at ${hour}:${min}`;
}

function WriterProfile({ time, user, writerType }) {
  let newDate = new Date(time);
  // console.log('newDate:', newDate);
  let prettyTime = getPrettyTime(newDate);
  return (
    user && (
      <Container writerType={writerType}>
        <Time>{`${
          writerType === 'questioner' ? 'asked' : 'answered'
        } ${prettyTime}`}</Time>
        <Profile>
          <Image />
          <Name>{user.displayName}</Name>
        </Profile>
      </Container>
    )
  );
}

export default WriterProfile;
