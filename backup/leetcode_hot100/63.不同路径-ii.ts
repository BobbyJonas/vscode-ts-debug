/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const res: number[][] = [[1]];
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (m <= 1 && n <= 1) {
    if (obstacleGrid?.[0]?.[0] === 0) return 1;
    return 0;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!res[i]) res[i] = [];
      if (!obstacleGrid[i][j] && (i >= 1 || j >= 1)) {
        const t1 = i >= 1 && !obstacleGrid[i - 1][j] ? res?.[i - 1]?.[j] ?? 0 : 0;
        const t2 = j >= 1 && !obstacleGrid[i][j - 1] ? res?.[i]?.[j - 1] ?? 0 : 0;
        res[i][j] = t1 + t2;
      }
    }
  }
  return res[m - 1][n - 1] ?? 0;
}
// @lc code=end
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
