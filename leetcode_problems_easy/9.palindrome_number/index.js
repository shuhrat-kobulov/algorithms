function isPalindrome(number) {
  if (-(2 ** 31) >= number && number >= 2 ** 31 - 1) {
    return false;
  }

  let stringNumber = number.toString();
  let arrNumber = [];

  for (let i = stringNumber.length - 1; i >= 0; i--) {
    arrNumber.push(stringNumber[i]);
  }

  if (arrNumber.join('') == number) {
    return true;
  }

  return false;
}

isPalindrome(1111111);
isPalindrome(1111112);
