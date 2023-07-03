function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let obj = {
    type: 0,
    color: 1,
    name: 2,
  };
  let result: number = 0;
  let keyIndex = obj[ruleKey];

  for (let i = 0; i < items.length; i++) {
    if (items[i][keyIndex] === ruleValue) {
      result++;
    }
  }

  return result;
}
