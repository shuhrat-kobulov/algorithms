function minOperations(n: number): number {
  if(n % 2 === 0) {
      return (n / 2) * (n / 2)
  }

  return Math.floor((n / 2) * (n / 2))
};
