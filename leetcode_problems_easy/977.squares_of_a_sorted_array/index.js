function sortedSquares(nums) {
  let i = 0;
  let j = nums.length - 1;
  let result = [];

  while (i <= j) {
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      result.push(nums[j] ** 2);
      j--;
    } else {
      result.push(nums[i] ** 2);
      i++;
    }
  }

  return result.reverse();
}
