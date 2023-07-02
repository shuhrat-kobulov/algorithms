function restoreString(s: string, indices: number[]): string {
  let arr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
  }

  return arr.join('');
}
