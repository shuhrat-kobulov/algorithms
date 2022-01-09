var romanToInt = function (romanNumber) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var number = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (roman[romanNumber[i]] < roman[romanNumber[i + 1]]) {
      let son = roman[romanNumber[i + 1]] - roman[romanNumber[i]];
      number += son;
      i++;
    } else {
      number += roman[romanNumber[i]];
    }
  }

  return number;
};

romanToInt('I');
