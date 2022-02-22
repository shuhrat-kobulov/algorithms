function countCode(str) {
  let result = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === 'c' && str[i + 1] === 'o' && str[i + 3] === 'e') {
      result += 1;
      i += 2;
    }
  }

  return result;
}

countCode('aaacodebbb');
