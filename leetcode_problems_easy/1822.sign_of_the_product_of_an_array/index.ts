function arraySign(nums: number[]): number {
  const sum = nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  return sum > 0 ? 1 : sum < 0 ? -1 : 0;
}
