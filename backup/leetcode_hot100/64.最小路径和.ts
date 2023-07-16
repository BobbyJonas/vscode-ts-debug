/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const res: number[][] = [];
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    if (!res[i]) res[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) res[i][j] = grid[i][j];
      else if (i === 0) res[i][j] = res[i][j - 1] + grid[i][j];
      else if (j === 0) res[i][j] = res[i - 1][j] + grid[i][j];
      else res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j];
    }
  }
  return res[m - 1][n - 1];
}
// @lc code=end
