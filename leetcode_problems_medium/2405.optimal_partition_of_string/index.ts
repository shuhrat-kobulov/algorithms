function partitionString(s: string): number {
  let partition: string = s[0];
  let count: number = 0;

  for (let i = 1; i < s.length; i++) {
    if (partition.includes(s[i])) {
      count++;
      partition = s[i];
    } else {
      partition += s[i];
    }
  }

  return count + 1;
}
