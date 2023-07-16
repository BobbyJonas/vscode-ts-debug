/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const step = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let direction = 0;
  let x = 0;
  let y = 0;
  const f: boolean[][] = [[true]];
  const res: number[] = [matrix[0][0]];
  let ifContinue = 0;
  while (true) {
    if (ifContinue >= 5) break;
    const x1 = x + step[direction][0];
    const y1 = y + step[direction][1];
    if (!f[x1]) f[x1] = [];
    if (!f[x1][y1] && x1 >= 0 && y1 >= 0 && x1 < matrix.length && y1 < matrix[0].length) {
      ifContinue = 0;
      f[x1][y1] = true;
      x = x1;
      y = y1;
      res.push(matrix[x1][y1]);
    } else {
      ifContinue++;
      direction = (direction + 1) % 4;
    }
  }
  return res;
}
// @lc code=end
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
