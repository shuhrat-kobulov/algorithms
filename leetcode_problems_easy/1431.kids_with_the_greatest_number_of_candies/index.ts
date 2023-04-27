function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatest: number = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= greatest);
}
