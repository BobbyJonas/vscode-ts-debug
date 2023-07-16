/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let currentStep = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currentStep <= 0) return false;
    currentStep--;
    if (nums[i] > currentStep) {
      currentStep = nums[i];
    }
  }
  return true;
}
// @lc code=end
console.log(canJump([0, 1]));
