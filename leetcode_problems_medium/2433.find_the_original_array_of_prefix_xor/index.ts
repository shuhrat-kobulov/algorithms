function findArray(pref: number[]): number[] {
  const result: number[] = [pref[0]];

  for (let i = 1; i < pref.length; i++) {
    result[i] = pref[i] ^ pref[i - 1];
  }

  return result;
}
