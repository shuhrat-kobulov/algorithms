function reverse(x: number): number {
  const isNegative = x < 0;

  let num = Math.abs(x);
  let reversedNumber = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  const result = isNegative ? -reversedNumber : reversedNumber;

  if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0;

  return result;
}
