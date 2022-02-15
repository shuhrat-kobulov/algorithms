function countHi(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'h') {
      if (str[i + 1] === 'i') {
        count += 1;
      }
    }
  }

  return count;
}

console.log('hihi');
