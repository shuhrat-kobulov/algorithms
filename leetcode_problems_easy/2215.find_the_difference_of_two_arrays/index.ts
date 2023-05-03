function findDifference(nums1: number[], nums2: number[]): number[][] {
  let result: number[][] = [[], []];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !result[0].includes(nums1[i])) {
      result[0].push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !result[1].includes(nums2[i])) {
      result[1].push(nums2[i]);
    }
  }

  return result;
}
