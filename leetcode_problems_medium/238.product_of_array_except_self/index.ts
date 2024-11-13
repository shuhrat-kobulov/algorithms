function buildPrefix(nums: number[]): number[] {
  let prefix: number[] = [1];

  for (let i = 0; i < nums.length; i++) {
    prefix.push(prefix[prefix.length - 1] * nums[i]);
  }

  return prefix;
}

function buildSuffix(nums: number[]): number[] {
  let suffix: number[] = [1];

  for (let i = nums.length - 1; i >= 0; i--) {
    suffix.push(suffix[suffix.length - 1] * nums[i]);
  }

  return suffix.reverse();
}

function productExceptSelf(nums: number[]): number[] {
  let prefix: number[] = buildPrefix(nums);
  let suffix: number[] = buildSuffix(nums);
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(prefix[i] * suffix[i + 1]);
  }

  return result;
}
