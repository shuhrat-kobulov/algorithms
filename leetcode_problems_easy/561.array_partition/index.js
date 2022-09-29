const arrayPairSum = function (nums) {
  nums.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  let sum = 0;

  for (let i = 0; i < nums.length - 1; i += 2) {
    sum += nums[i];
  }

  return sum;
};

console.log(arrayPairSum([6214, -2290, 2833, -7908]));
