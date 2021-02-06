module.exports = (text) => {
  const numberArray = [];
  for (let i = 0; i < text.length; i++) {
    numberArray.push(text[i].charCodeAt(0).toString());
  }
  const textToNumbers = numberArray.join("");
  if (textToNumbers.length < 16) {
    return textToNumbers;
  }
  return Date.now() + textToNumbers.slice(0, 15);
};
