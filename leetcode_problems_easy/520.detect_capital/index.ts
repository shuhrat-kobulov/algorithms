function isUpper(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (
      s.charCodeAt(i) < 'A'.charCodeAt(0) ||
      s.charCodeAt(i) > 'Z'.charCodeAt(0)
    ) {
      return false;
    }
  }

  return true;
}

function isLower(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (
      s.charCodeAt(i) < 'a'.charCodeAt(0) ||
      s.charCodeAt(i) > 'z'.charCodeAt(0)
    ) {
      return false;
    }
  }

  return true;
}

function detectCapitalUse(word: string): boolean {
  if (isUpper(word) || isLower(word)) {
    return true;
  }

  return isUpper(word.substr(0, 1)) && isLower(word.substr(1));
}
