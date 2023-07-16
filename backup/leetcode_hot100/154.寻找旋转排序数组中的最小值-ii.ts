/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
  if (nums.length === 0) return -Infinity;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(...nums);
  const i = 0;
  const j = nums.length - 1;
  const k = Math.floor((i + j) / 2);
  if (nums[k] > nums[nums.length - 1]) {
    return findMin(nums.slice(k));
  }
  if (nums[k] < nums[0]) {
    return findMin(nums.slice(0, k + 1));
  }
  return Math.min(findMin(nums.slice(k)), findMin(nums.slice(0, k + 1)));
}
// @lc code=end
console.log(findMin([1, 3, 5]));
