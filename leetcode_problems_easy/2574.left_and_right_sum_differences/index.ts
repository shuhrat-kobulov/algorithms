function leftRightDifference(nums: number[]): number[] {
  let leftSum: number = 0;
  let totalSum: number = 0;
  let answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    let rightSum: number = totalSum - leftSum - nums[i];

    answer.push(Math.abs(leftSum - rightSum));

    leftSum += nums[i];
  }

  return answer;
}
