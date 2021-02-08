const fixLength = (sentence) => {
  if (sentence.toString().length === 1) {
    return "0" + sentence;
  }
  return sentence.toString();
};

const fixDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return fixLength(day) + "-" + fixLength(month) + "-" + year;
};

module.exports = () => {
  const date = new Date();
  return (
    fixDate(date) +
    " " +
    fixLength(date.getHours()) +
    ":" +
    fixLength(date.getMinutes()) +
    ":" +
    fixLength(date.getSeconds())
  );
};
