const intToRoman = function (num) {
  const roman = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';
  let int = num;

  for (let i = 0; i < roman.length; i++) {
    if (int / roman[i][0] >= 1) {
      const count = Math.floor(int / roman[i][0]);

      for (let j = 0; j < count; j++) {
        result += roman[i][1];
        int = int - roman[i][0];
      }
    }
  }

  return result;
};

console.log(intToRoman(3000));
