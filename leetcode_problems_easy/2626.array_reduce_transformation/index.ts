type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init;

  for (const num of nums) {
    result = fn(result, num);
  }

  return result;
}
