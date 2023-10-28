/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const lineValid: boolean[][] = [];
  const columnValid: boolean[][] = [];
  const squareValid: boolean[][] = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const squareNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (lineValid[i]?.[Number(board[i][j])]) return false;
        if (columnValid[j]?.[Number(board[i][j])]) return false;
        if (squareValid[squareNum]?.[Number(board[i][j])]) return false;
        if (!lineValid[i]) lineValid[i] = [];
        if (!columnValid[j]) columnValid[j] = [];
        if (!squareValid[squareNum]) squareValid[squareNum] = [];
        lineValid[i][Number(board[i][j])] = true;
        columnValid[j][Number(board[i][j])] = true;
        squareValid[squareNum][Number(board[i][j])] = true;
      }
    }
  }
  return true;
}
// @lc code=end

isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
