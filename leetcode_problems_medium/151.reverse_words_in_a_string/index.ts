function reverseWords(s: string): string {
  let result: string = '';
  let inp = s.split(' ');

  for (let i = inp.length - 1; i >= 0; i--) {
    if (inp[i]) {
      result += ' ' + inp[i];
    }
  }

  return result.trim();
}
