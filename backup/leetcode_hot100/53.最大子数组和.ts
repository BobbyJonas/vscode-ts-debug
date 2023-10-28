/* eslint-disable prefer-destructuring */
/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const sum: number[] = [];
  const sumMin: number[] = [];
  [sum[0]] = nums;
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  sumMin[0] = 0;
  sumMin[1] = sum[0];
  for (let i = 1; i < nums.length; i++) {
    sumMin[i + 1] = sum[i] < sumMin[i] ? sum[i] : sumMin[i];
  }
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = Math.max(res, sum[i], sum[i] - sumMin[i], nums[i]);
  }
  return res;
}
// @lc code=end
console.log(maxSubArray([-2, -1]));
