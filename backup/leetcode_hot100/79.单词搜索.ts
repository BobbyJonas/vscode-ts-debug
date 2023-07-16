/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const f: boolean[][] = [];
  function backTrack(depth: number, i: number, j: number): boolean {
    const direction = [
      [1, 0],
      [0, -1],
      [-1, 0],
      [0, 1],
    ];
    if (depth >= word.length) {
      return true;
    }
    for (let k = 0; k < 4; k++) {
      const [i1, j1] = direction[k];
      if (
        i + i1 >= 0 &&
        i + i1 < m &&
        j + j1 >= 0 &&
        j + j1 < n &&
        !f[i + i1]?.[j + j1] &&
        board[i + i1][j + j1] === word[depth]
      ) {
        if (!f[i + i1]) f[i + i1] = [];
        f[i + i1][j + j1] = true;
        if (backTrack(depth + 1, i + i1, j + j1)) return true;
        f[i + i1][j + j1] = false;
      }
    }
    return false;
  }
  for (let i = 0; i < m; i++) {
    if (!f[i]) f[i] = [];
    for (let j = 0; j < n; j++) {
      f[i][j] = true;
      if (board[i][j] === word[0]) {
        if (backTrack(1, i, j)) return true;
      }
      f[i][j] = false;
    }
  }
  return false;
}
// @lc code=end
