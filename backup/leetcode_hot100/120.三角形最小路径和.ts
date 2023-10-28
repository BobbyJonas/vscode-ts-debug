/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const dp: number[][] = [];
  const m = triangle.length;
  for (let i = 0; i < m; i++) {
    if (!dp[i]) dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (i === 0) dp[i][j] = triangle[i][j];
      else if (j === 0) dp[i][j] = dp[i - 1][j] + triangle[i][j];
      else if (j === i) dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
  return Math.min(...dp[m - 1]);
}
// @lc code=end
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
