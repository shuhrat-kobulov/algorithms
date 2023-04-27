function mergeAlternately(word1: string, word2: string): string {
  let maxLength: number = Math.max(word1.length, word2.length);
  const result: string[] = [];

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) {
      result.push(word1[i]);
    }

    if (word2[i]) {
      result.push(word2[i]);
    }
  }

  return result.join('');
}
