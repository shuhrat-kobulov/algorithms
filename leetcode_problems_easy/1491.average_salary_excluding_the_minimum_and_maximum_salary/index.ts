function average(salary: number[]): number {
  salary.sort((a, b) => a - b);
  let total: number = 0;

  for (let i = 1; i < salary.length - 1; i++) {
    total += salary[i];
  }

  return total / (salary.length - 2);
}
