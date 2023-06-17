function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let originalNumber = x;
  let reversedNumber = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return originalNumber === reversedNumber;
}
