/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const lineValid: boolean[][] = [];
  const columnValid: boolean[][] = [];
  const squareValid: boolean[][] = [];

  const fillQueue: [number, number][] = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const squareNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (!lineValid[i]) lineValid[i] = [];
        if (!columnValid[j]) columnValid[j] = [];
        if (!squareValid[squareNum]) squareValid[squareNum] = [];
        lineValid[i][Number(board[i][j])] = true;
        columnValid[j][Number(board[i][j])] = true;
        squareValid[squareNum][Number(board[i][j])] = true;
      } else {
        fillQueue.push([i, j]);
      }
    }
  }
  let res: string[][];
  function solveProcedure(currentIndex: number): void {
    const [i, j] = fillQueue[currentIndex];
    const squareNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    for (let k = 1; k <= 9; k++) {
      if (!lineValid[i]?.[k] && !columnValid[j]?.[k] && !squareValid[squareNum]?.[k]) {
        if (!lineValid[i]) lineValid[i] = [];
        if (!columnValid[j]) columnValid[j] = [];
        if (!squareValid[squareNum]) squareValid[squareNum] = [];
        lineValid[i][k] = true;
        columnValid[j][k] = true;
        squareValid[squareNum][k] = true;
        board[i][j] = String(k);
        if (currentIndex + 1 < fillQueue.length) {
          solveProcedure(currentIndex + 1);
        } else {
          res = board;
          return;
        }
        if (res) return;
        board[i][j] = '.';
        lineValid[i][k] = false;
        columnValid[j][k] = false;
        squareValid[squareNum][k] = false;
      }
    }
  }
  solveProcedure(0);
}
// @lc code=end
solveSudoku([]);
