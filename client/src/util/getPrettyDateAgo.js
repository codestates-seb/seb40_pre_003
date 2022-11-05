export function getPrettyDateAgo(dateObj) {
  let nowTime = new Date().getTime();
  let postedTime = dateObj.getTime();

  let secDiff = Math.floor((nowTime - postedTime) / 1000);
  let minDiff = Math.floor(secDiff / 60);
  let hourDiff = Math.floor(minDiff / 60);
  let dayDiff = Math.floor(hourDiff / 24);

  if (dayDiff < 1) {
    return `today`;
  } else if (dayDiff === 1) {
    return `yesterday`;
  } else if (dayDiff > 1 && dayDiff < 30) {
    return `${dayDiff} days ago`;
  }

  let monthDiff = Math.floor(dayDiff / 30);
  if (monthDiff < 12) {
    return `${monthDiff} month${monthDiff === 1 ? '' : 's'} ago`;
  }

  let yearDiff = Math.floor(monthDiff / 12);

  if (monthDiff === 12) {
    return `${1} year ago`;
  } else {
    monthDiff -= yearDiff * 12;
    return `${yearDiff} year${yearDiff === 1 ? '' : 's'}, ${monthDiff} month${
      monthDiff === 1 ? '' : 's'
    } ago`;
  }
}
