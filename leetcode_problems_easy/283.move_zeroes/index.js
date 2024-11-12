function moveZeroes(nums) {
  // pass
  let countOfZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      countOfZero++;
      continue;
    }

    let curentNumber = nums[i];
    nums[i] = nums[i - countOfZero];
    nums[i - countOfZero] = curentNumber;
  }

  return nums;
}
