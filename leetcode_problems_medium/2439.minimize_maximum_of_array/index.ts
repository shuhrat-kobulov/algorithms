function minimizeArrayValue(nums: number[]): number {
  let prefixSum: number = 0;
  let result: number = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    result = Math.max(result, Math.ceil(prefixSum / (i + 1)));
  }

  return result;
}
