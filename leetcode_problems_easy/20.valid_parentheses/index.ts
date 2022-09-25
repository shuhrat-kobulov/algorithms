function isValid(s: string): boolean {
  if (1 > s.length && 10**4 < s.length) return false;
  
  let parentheses: Record<string, string> = {
      "(": ")",
      "[": "]",
      "{": "}",
  }
  
  let arr: string[] = [];
  
  for(let i: number = 0; i < s.length; i++) {
      if (parentheses[s[i]]) {
          arr.push(parentheses[s[i]])
      } else {
          let lastElement = arr.pop()
          
          if (lastElement !== s[i]) return false;
      }
  }
  
  return !arr.length;
};
