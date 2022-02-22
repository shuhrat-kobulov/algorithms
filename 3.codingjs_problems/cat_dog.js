function catDog(str) {
  let resultDog = 0;
  let resultCat = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === 'd' && str[i + 1] === 'o' && str[i + 2] === 'g') {
      resultDog += 1;
      i += 2;
    } else if (str[i] === 'c' && str[i + 1] === 'a' && str[i + 2] === 't') {
      resultCat += 1;
      i += 2;
    }
  }

  return resultDog === resultCat;
}

catDog('catog');
