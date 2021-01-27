module.exports = () => {
  const date = new Date();
  return (
    date.toLocaleDateString() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
  );
};
