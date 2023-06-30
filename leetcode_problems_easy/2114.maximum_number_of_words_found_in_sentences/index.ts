function mostWordsFound(sentences: string[]): number {
  let maxNum: number = 0;

  for (let i = 0; i < sentences.length; i++) {
    let countOfWords = sentences[i].split(' ').length;

    if (maxNum < countOfWords) {
      maxNum = countOfWords;
    }
  }

  return maxNum;
}
