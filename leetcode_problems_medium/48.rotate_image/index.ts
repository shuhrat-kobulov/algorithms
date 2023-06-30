function rotate(matrix: number[][]): void {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
          console.log(matrix[i][j], matrix[j][i])
      }
  }

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[i][n - j - 1];
          matrix[i][n - j - 1] = temp;
      }
  }
};
