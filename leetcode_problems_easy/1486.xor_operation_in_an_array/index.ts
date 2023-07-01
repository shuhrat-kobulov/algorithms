function xorOperation(n: number, start: number): number {
  let result: number = start;

  for (let i = 1; i < n; i++) {
    result ^= start + 2 * i;
  }

  return result;
}
