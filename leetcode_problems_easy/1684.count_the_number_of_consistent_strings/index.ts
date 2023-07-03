function countConsistentStrings(allowed: string, words: string[]): number {
  let countOfWords: number = 0;

  for (let i = 0; i < words.length; i++) {
    let isAllowed = true;

    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        isAllowed = false;
        break;
      }
    }

    if (isAllowed) {
      countOfWords++;
    }
  }

  return countOfWords;
}
