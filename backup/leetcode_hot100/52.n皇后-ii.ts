/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
  const columnFlag: boolean[] = [];
  const currentMap: string[][] = [];
  const currentSolution: number[][] = [];
  const res: string[][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!currentMap[i]) currentMap[i] = [String(i)];
      currentMap[i][j] = '.';
    }
  }
  function solve(index: number): void {
    function isValid(x: number, y: number): boolean {
      const reformMap: string[][] = [];
      for (let i = 0; i < currentSolution.length; i++) {
        const [x1_0, y1_0] = currentSolution[i];
        let k = 0;
        while (x1_0 + k < n || x1_0 - k >= 0) {
          k++;
          if (x1_0 + k >= 0 && x1_0 + k < n && y1_0 - k >= 0 && y1_0 - k < n) {
            if (!reformMap[x1_0 + k]) reformMap[x1_0 + k] = [];
            reformMap[x1_0 + k][y1_0 - k] = 'x';
          }
          if (x1_0 + k >= 0 && x1_0 + k < n && y1_0 + k >= 0 && y1_0 + k < n) {
            if (!reformMap[x1_0 + k]) reformMap[x1_0 + k] = [];
            reformMap[x1_0 + k][y1_0 + k] = 'x';
          }
          if (x1_0 - k >= 0 && x1_0 - k < n && y1_0 - k >= 0 && y1_0 - k < n) {
            if (!reformMap[x1_0 - k]) reformMap[x1_0 - k] = [];
            reformMap[x1_0 - k][y1_0 - k] = 'x';
          }
          if (x1_0 - k >= 0 && x1_0 - k < n && y1_0 + k >= 0 && y1_0 + k < n) {
            if (!reformMap[x1_0 - k]) reformMap[x1_0 - k] = [];
            reformMap[x1_0 - k][y1_0 + k] = 'x';
          }
        }
      }
      return Boolean(reformMap?.[x]?.[y] !== 'x');
    }
    if (index >= n) {
      res.push(currentMap.map((item) => item.join('')));
      return;
    }
    for (let j = 0; j < n; j++) {
      if (!columnFlag[j] && isValid(index, j)) {
        columnFlag[j] = true;
        currentMap[index][j] = 'Q';
        currentSolution.push([index, j]);
        solve(index + 1);
        currentSolution.pop();
        currentMap[index][j] = '.';
        columnFlag[j] = false;
      }
    }
  }
  solve(0);
  return res.length || 0;
}
// @lc code=end
