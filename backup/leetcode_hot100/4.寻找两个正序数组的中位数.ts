/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
  const newArray: number[] = [];
  let k1 = 0;
  let k2 = 0;
  while (k1 < nums1.length || k2 < nums2.length) {
    if (nums1[k1] < nums2[k2] || nums2[k2] === undefined) {
      newArray.push(nums1[k1]);
      k1++;
    } else {
      newArray.push(nums2[k2]);
      k2++;
    }
    if (newArray.length > (nums1.length + nums2.length) / 2) {
      const newLength = nums1.length + nums2.length;
      return newLength % 2 === 1
        ? newArray[(newLength - 1) / 2]
        : (newArray[newLength / 2 - 1] + newArray[newLength / 2]) / 2;
    }
  }
  return undefined;
}
// @lc code=end

console.log(findMedianSortedArrays([], [1]));
