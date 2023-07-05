function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const prefixCommonArray: number[] = [];
  let seen = new Set();
  let count: number = 0;

  for (let i = 0; i < A.length; i++) {
    if (seen.has(A[i])) {
      count++;
    }
    seen.add(A[i]);

    if (seen.has(B[i])) {
      count++;
    }
    seen.add(B[i]);

    prefixCommonArray[i] = count;
  }

  return prefixCommonArray;
}
