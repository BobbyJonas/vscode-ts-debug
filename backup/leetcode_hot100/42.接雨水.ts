/* eslint-disable prefer-destructuring */
/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  const maxLeft: number[] = [];
  const maxRight: number[] = [];
  maxLeft[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  }
  maxRight[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  }
  let ans: number = 0;
  for (let i = 0; i < height.length; i++) {
    if (maxLeft[i] > height[i] && maxRight[i] > height[i]) {
      const h1 = Math.min(maxLeft[i], maxRight[i]);
      ans += h1 - height[i];
    }
  }
  return ans;
}
// @lc code=end
trap([4, 2, 0, 3, 2, 5]);
