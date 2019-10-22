
const formatDate = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  let min = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  let sec = timeInSeconds - (hours * 3600) - (min * 60);
  let time = "";
  if (timeInSeconds != null) {
    if (hours != 0) {
      time = `${hours}h`;
    }
    if (min != 0) {
      min = (hours > 0) ? ` ${min}` : (min);
      time += `${min}m`;
    }
    if (sec != 0) {
      sec = (min > 0 || hours > 0) ? ` ${sec}` : (sec);
      time += `${sec}s`;
    }
  }
  else {
    time = '0s'
  }

  return time;
}

module.exports = formatDate;