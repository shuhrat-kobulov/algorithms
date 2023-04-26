function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b); // sort the array in non-decreasing order
  let i = 0,
    j = people.length - 1;
  let boats = 0;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    boats++;
  }

  return boats;
}
