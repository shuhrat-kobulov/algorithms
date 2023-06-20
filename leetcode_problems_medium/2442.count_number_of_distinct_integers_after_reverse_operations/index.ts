function countDistinctIntegers(nums: number[]): number {
  const result = new Set([...nums]);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let reversedNum = 0;

    while (num > 0) {
      let lastDigit = num % 10;
      reversedNum = reversedNum * 10 + lastDigit;
      num = Math.floor(num / 10);
    }

    result.add(reversedNum);
  }

  return result.size;
}
