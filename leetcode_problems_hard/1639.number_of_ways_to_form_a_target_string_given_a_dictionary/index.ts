const MOD = 1000000007;

function numWays(words: string[], target: string): number {
  const memo = Array.from({ length: words[0].length }, () =>
    Array(target.length).fill(-1)
  );

  const numWaysUtil = (wIndex: number, tIndex: number): number => {
    if (words[0].length - wIndex < target.length - tIndex) return 0;

    if (tIndex >= target.length) return 1;

    if (memo[wIndex][tIndex] !== -1) return memo[wIndex][tIndex];

    const validStrCount = words.filter((string) => {
      return string[wIndex] === target[tIndex];
    }).length;

    const ways =
      validStrCount * numWaysUtil(wIndex + 1, tIndex + 1) +
      numWaysUtil(wIndex + 1, tIndex);
    memo[wIndex][tIndex] = ways % MOD;
    return memo[wIndex][tIndex];
  };

  return numWaysUtil(0, 0);
}
