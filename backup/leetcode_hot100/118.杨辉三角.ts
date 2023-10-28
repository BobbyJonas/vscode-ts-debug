/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const currentRow: number[] = [];
    currentRow[0] = 1;
    currentRow[i] = 1;

    for (let j = 1; j < i; j++) {
      currentRow[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(currentRow);
  }
  return res;
}
// @lc code=end
