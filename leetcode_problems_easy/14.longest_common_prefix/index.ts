function longestCommonPrefix (strs: string[]): string {
  if (!strs.length || strs.length >= 200) return '';

  let prefix: string = '';

  for (let i = 0; i < strs[0].length; i++) {
    let charecter: string = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== charecter) return prefix;
    }

    prefix += charecter;
  }

  return prefix;
};

longestCommonPrefix(['flower', 'flow', 'flight'])
