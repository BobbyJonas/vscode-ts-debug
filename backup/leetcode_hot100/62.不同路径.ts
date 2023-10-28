/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const res: number[][] = [[1]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!(i === 0 && j === 0)) {
        if (!res[i]) res[i] = [];
        if (!res[i - 1]) res[i - 1] = [];
        res[i][j] = (res?.[i - 1]?.[j] ?? 0) + (res?.[i]?.[j - 1] ?? 0);
      }
    }
  }
  return res[m - 1][n - 1];
}
// @lc code=end
console.log(uniquePaths(3, 7));
