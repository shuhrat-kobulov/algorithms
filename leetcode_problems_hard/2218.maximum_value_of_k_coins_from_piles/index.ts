function maxValueOfCoins(piles: number[][], coins: number): number {
  const dp = new Array(coins + 1).fill(0);

  for (let i = 0; i < piles.length; ++i) {
    for (let j = coins; j > 0; --j) {
      const pileLength = piles[i].length;
      const kLimit = Math.min(j, pileLength);
      let sum = 0;

      for (let k = 1; k <= kLimit; k++) {
        sum += piles[i][k - 1];
        dp[j] = Math.max(dp[j], dp[j - k] + sum);
      }
    }
  }

  return dp[coins];
}
