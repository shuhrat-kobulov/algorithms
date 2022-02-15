function doubleChar(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i] + str[i]);
  }

  return arr.join('');
}

doubleChar('The');
