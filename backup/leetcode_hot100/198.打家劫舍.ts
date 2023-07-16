/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  const dp: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < 2) {
      dp[i] = nums[i];
    } else {
      dp[i] = Math.max(dp[i - 2] + nums[i], (dp[i - 3] ?? 0) + nums[i]);
    }
  }
  return Math.max(dp[nums.length - 1], dp[nums.length - 2] ?? 0);
}
// @lc code=end
