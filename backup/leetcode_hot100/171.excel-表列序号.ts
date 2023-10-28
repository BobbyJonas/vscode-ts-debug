/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let res: number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const current = columnTitle.charCodeAt(i) - 64;
    res += current * 26 ** (columnTitle.length - i - 1);
  }
  return res;
}
// @lc code=end
console.log(titleToNumber('ZY'));
