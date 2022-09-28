const rotate = function (nums, k) {
  let n = nums.length;
  let temp = [...nums];

  for (let i = 0; i < n; i++) {
    nums[(i + k) % n] = temp[i];
  }
};
