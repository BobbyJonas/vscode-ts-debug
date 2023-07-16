/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const found: boolean[][] = [];
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  function move(x: number, y: number): void {
    if (!found[x]) found[x] = [];
    found[x][y] = true;
    for (let i = 0; i < direction.length; i++) {
      const [dx, dy] = direction[i];
      const nextX = x + dx;
      const nextY = y + dy;
      if (
        nextX >= 0 &&
        nextX < grid.length &&
        nextY >= 0 &&
        nextY < grid[0].length &&
        grid[nextX][nextY] === '1' &&
        !found[nextX]?.[nextY]
      ) {
        move(nextX, nextY);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1' && !found[i]?.[j]) {
        res++;
        move(i, j);
      }
    }
  }
  return res;
}
// @lc code=end
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
