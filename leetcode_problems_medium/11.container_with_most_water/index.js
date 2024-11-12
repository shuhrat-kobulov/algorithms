function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;

  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    maxArea = Math.max(area, maxArea);

    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
