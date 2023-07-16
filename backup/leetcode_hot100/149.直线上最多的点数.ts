/* eslint-disable no-debugger */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/*
 * @lc app=leetcode.cn id=149 lang=typescript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
function maxPoints(points: number[][]): number {
  const lineHash: {
    [kb: string]: {
      [pointIndex: number]: boolean;
    };
  } = {};
  function maxDivided(a: number, b: number): number {
    let a1 = a;
    let b1 = b;
    while (a1 % b1 !== 0) {
      const c1 = a1 % b1;
      a1 = b1;
      b1 = c1;
    }
    return b1;
  }
  function generateNum(a: number, b: number): string {
    if (a % b === 0) return String(a / b);
    const c = maxDivided(a, b);
    return `${a / c}/${b / c}`;
  }
  if (points.length <= 1) return points.length;
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[j];
      const [x0, y0] = points[i];
      if (x1 !== x0) {
        const k = generateNum(y1 - y0, x1 - x0);
        const b = generateNum(y0 * (x1 - x0) - x0 * (y1 - y0), x1 - x0);
        if (!lineHash[`${k},${b}`]) lineHash[`${k},${b}`] = [];
        const currentLine = lineHash[`${k},${b}`];
        currentLine[i] = true;
        currentLine[j] = true;
      } else if (y1 !== y0) {
        if (!lineHash[x0]) lineHash[x0] = [];
        const currentLine = lineHash[x0];
        currentLine[i] = true;
        currentLine[j] = true;
      }
    }
  }
  let res = 0;
  for (const line in lineHash) {
    res = Math.max(res, Object.keys(lineHash[line]).length);
    if (res === 8) debugger;
  }
  return res;
}
// @lc code=end

console.log(
  maxPoints([
    [7, 3],
    [19, 19],
    [-16, 3],
    [13, 17],
    [-18, 1],
    [-18, -17],
    [13, -3],
    [3, 7],
    [-11, 12],
    [7, 19],
    [19, -12],
    [20, -18],
    [-16, -15],
    [-10, -15],
    [-16, -18],
    [-14, -1],
    [18, 10],
    [-13, 8],
    [7, -5],
    [-4, -9],
    [-11, 2],
    [-9, -9],
    [-5, -16],
    [10, 14],
    [-3, 4],
    [1, -20],
    [2, 16],
    [0, 14],
    [-14, 5],
    [15, -11],
    [3, 11],
    [11, -10],
    [-1, -7],
    [16, 7],
    [1, -11],
    [-8, -3],
    [1, -6],
    [19, 7],
    [3, 6],
    [-1, -2],
    [7, -3],
    [-6, -8],
    [7, 1],
    [-15, 12],
    [-17, 9],
    [19, -9],
    [1, 0],
    [9, -10],
    [6, 20],
    [-12, -4],
    [-16, -17],
    [14, 3],
    [0, -1],
    [-18, 9],
    [-15, 15],
    [-3, -15],
    [-5, 20],
    [15, -14],
    [9, -17],
    [10, -14],
    [-7, -11],
    [14, 9],
    [1, -1],
    [15, 12],
    [-5, -1],
    [-17, -5],
    [15, -2],
    [-12, 11],
    [19, -18],
    [8, 7],
    [-5, -3],
    [-17, -1],
    [-18, 13],
    [15, -3],
    [4, 18],
    [-14, -15],
    [15, 8],
    [-18, -12],
    [-15, 19],
    [-9, 16],
    [-9, 14],
    [-12, -14],
    [-2, -20],
    [-3, -13],
    [10, -7],
    [-2, -10],
    [9, 10],
    [-1, 7],
    [-17, -6],
    [-15, 20],
    [5, -17],
    [6, -6],
    [-11, -8],
  ])
);
