/*
 * @lc app=leetcode.cn id=85 lang=typescript
 *
 * [85] 最大矩形
 */

// @lc code=start
function maximalRectangle(matrix: string[][]): number {
  const f: number[][] = [];
  const s: number[][] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  let res: number = 0;
  for (let i = 0; i < m; i++) {
    if (!f[i]) f[i] = [];
    if (!s[i]) s[i] = [];
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        f[i][j] = (f[i]?.[j - 1] ?? 0) + 1;
        s[i][j] = f[i][j];
        res = Math.max(res, s[i][j]);
        let currentRow = f[i][j];
        let currentCol = 1;
        let i0 = i - 1;
        while (i0 >= 0 && f?.[i0]?.[j] > 0) {
          currentRow = Math.min(currentRow, f[i0][j]);
          currentCol++;
          s[i][j] = Math.max(s[i][j], currentRow * currentCol);
          res = Math.max(res, s[i][j]);
          i0--;
        }
      } else {
        f[i][j] = 0;
      }
    }
  }
  return res;
}
// @lc code=end
