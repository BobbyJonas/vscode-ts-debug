/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let i = 0;
  while (nums[i] === 0 && i < nums.length) i++;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== 0 && nums[j] === 0) {
      const t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
      i++;
    }
    j++;
  }
  while (nums[i] === 1 && i < nums.length) i++;
  j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== 1 && nums[j] === 1) {
      const t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
      i++;
    }
    j++;
  }
}
// @lc code=end
sortColors([1, 2, 1]);
