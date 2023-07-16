/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const k1 = k % nums.length;
  const temp = nums.splice(0, nums.length - k1);
  nums.splice(k1, 0, ...temp);
}
// @lc code=end
rotate([1, 2, 3, 4, 5, 6, 7], 3);
