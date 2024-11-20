function longestCommonPrefix(strs: string[]): string {
  if (!strs.length || strs.length >= 200) return '';

  let prefix: string = '';

  for (let i = 0; i < strs[0].length; i++) {
    let character: string = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }

    prefix += character;
  }

  return prefix;
}

longestCommonPrefix(['flower', 'flow', 'flight']);
