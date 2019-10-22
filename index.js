
const formatDate = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const min = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  const timeInSecondsonds = timeInSeconds - (hours * 3600) - (min * 60);
  let time = "";

  if (hours != 0) {
    time = `${hours}h `;
  }
  if (min != 0 ) {
    time += `${min}m `;
  }
  if (timeInSecondsonds !=0 ) {
    time += `${timeInSecondsonds}s `;
  }
  if (time === "") {
    time = `${timeInSecondsonds}s `;
  }
  return time;
}

module.exports = formatDate;