function longestPalindromeSubseq(s: string): number {
  const stringLength = s.length;
  const dp: number[][] = Array.from({ length: stringLength }, () =>
    Array(stringLength).fill(0)
  );

  // Initialize the diagonal elements with 1
  for (let i = 0; i < stringLength; i++) {
    dp[i][i] = 1;
  }

  // Iterate through dp array in a bottom-up manner
  for (let i = stringLength - 1; i >= 0; i--) {
    for (let j = i + 1; j < stringLength; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][stringLength - 1];
}
