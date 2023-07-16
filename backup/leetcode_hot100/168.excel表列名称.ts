/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let res: string = '';
  while (columnNumber > 0) {
    columnNumber--;
    const r = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);
    res = String.fromCharCode(65 + r) + res;
  }
  return res;
}
// @lc code=end
console.log(convertToTitle(701));
