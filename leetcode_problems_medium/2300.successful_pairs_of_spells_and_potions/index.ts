function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions.sort((a, b) => a - b);
  let result: number[] = [];
  const spellsLength: number = spells.length;
  const potionsLength: number = potions.length;

  for (let i = 0; i < spellsLength; i++) {
    let count: number = 0;
    let left: number = 0;
    let right: number = potionsLength - 1;
    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);

      if (spells[i] * potions[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    count = potionsLength - left;
    result.push(count);
  }

  return result;
}
