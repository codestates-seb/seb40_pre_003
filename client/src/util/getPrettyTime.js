export function getPrettyTime(dateObj) {
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
  if (secDiff <= 0) {
    return `now`;
  } else if (secDiff < 60) {
    return `${secDiff} sec${secDiff === 1 ? '' : 's'} ago`;
  }
  let minDiff = Math.floor(secDiff / 60);
  if (minDiff < 60) {
    return `${minDiff} min${minDiff === 1 ? '' : 's'} ago`;
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
