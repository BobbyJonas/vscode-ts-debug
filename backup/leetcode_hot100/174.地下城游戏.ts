/* eslint-disable prefer-destructuring */
/*
 * @lc app=leetcode.cn id=174 lang=typescript
 *
 * [174] 地下城游戏
 */

// @lc code=start
function calculateMinimumHP(dungeon: number[][]): number {
  const dp: number[][] = [];
  const n = dungeon.length;
  const m = dungeon[0].length;
  dp[n] = [];
  dp[n][m - 1] = 1;
  dp[n - 1] = [];
  dp[n - 1][m] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (!dp[i]) dp[i] = [];
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = Math.max(
        Math.min(dp[i + 1]?.[j] ?? Infinity, dp[i]?.[j + 1] ?? Infinity) - dungeon[i][j],
        1
      );
    }
  }

  return dp[0][0];
}
// @lc code=end
console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
);
