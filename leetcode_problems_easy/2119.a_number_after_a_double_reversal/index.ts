function isSameAfterReversals(num: number): boolean {
  let orginalNum = num;
  let reversedNumber = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return String(orginalNum).length === String(reversedNumber).length;
}
