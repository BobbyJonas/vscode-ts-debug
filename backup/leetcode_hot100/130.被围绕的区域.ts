/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const f: boolean[][] = [];
  const m = board.length;
  const n = board[0].length;
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  function dfs(x: number, y: number) {
    if (!f[x]) f[x] = [];
    f[x][y] = true;
    for (let k = 0; k < direction.length; k++) {
      const [x0, y0] = direction[k];
      const x1 = x + x0;
      const y1 = y + y0;
      if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n && board[x1][y1] === 'O' && !f?.[x1]?.[y1])
        dfs(x1, y1);
    }
  }
  let currentDir = 0;
  let x = 0;
  let y = 0;
  while (!(x === 0 && y === 0 && currentDir === 3)) {
    if (board[x][y] === 'O' && !f?.[x]?.[y]) {
      dfs(x, y);
    }
    const [x0, y0] = direction[currentDir];
    const x1 = x + x0;
    const y1 = y + y0;
    if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n) {
      x = x1;
      y = y1;
    } else currentDir++;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O' && !f?.[i]?.[j]) board[i][j] = 'X';
    }
  }
}
// @lc code=end

console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);
