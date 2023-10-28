/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
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
  const res: number[][] = [[1]];
  let i = 1;
  let ifContinue = 0;
  while (true) {
    if (ifContinue >= 5) break;
    const x1 = x + step[direction][0];
    const y1 = y + step[direction][1];
    if (!f[x1]) f[x1] = [];
    if (!f[x1][y1] && x1 >= 0 && y1 >= 0 && x1 < n && y1 < n) {
      ifContinue = 0;
      f[x1][y1] = true;
      x = x1;
      y = y1;
      if (!res[x]) res[x] = [];
      res[x][y] = ++i;
    } else {
      ifContinue++;
      direction = (direction + 1) % 4;
    }
  }
  return res;
}
// @lc code=end
