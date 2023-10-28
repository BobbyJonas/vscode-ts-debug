/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const flag: boolean[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    let flagRepeat = true;
    while (flagRepeat) {
      flagRepeat = false;
      for (let j = 0; j < matrix.length; j++) {
        const i1 = j;
        const j1 = matrix.length - i - 1;
        if (!flag?.[i]?.[j] && !flag?.[i1]?.[j1] && (i !== i1 || j !== j1)) {
          flagRepeat = true;
          const t = matrix[i][j];
          matrix[i][j] = matrix[i1][j1];
          matrix[i1][j1] = t;
          if (!flag[i1]) flag[i1] = [];
          flag[i1][j1] = true;
        }
      }
    }
  }
}
// @lc code=end
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
