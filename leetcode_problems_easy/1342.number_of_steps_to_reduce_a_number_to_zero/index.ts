function numberOfSteps(num: number): number {
  let step: number = 0;

  while (num > 0) {
    if ((num & 1) === 0) {
      num >>= 1;
    } else {
      num--;
    }

    step++;
  }

  return step;
}
