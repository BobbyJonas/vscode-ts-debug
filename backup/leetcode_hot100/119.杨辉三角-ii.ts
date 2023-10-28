/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let lastRow: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    const currentRow: number[] = [];
    currentRow[0] = 1;
    currentRow[i] = 1;

    for (let j = 1; j < i; j++) {
      currentRow[j] = lastRow[j - 1] + lastRow[j];
    }

    lastRow = currentRow;
  }
  return lastRow;
}
// @lc code=end
