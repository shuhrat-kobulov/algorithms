function findMiddleIndex(nums: number[]): number {
  const totalSum: number = nums.reduce((acc, num) => acc + num, 0);

  let leftSum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum: number = totalSum - leftSum - nums[i];

    if (rightSum === leftSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
}
