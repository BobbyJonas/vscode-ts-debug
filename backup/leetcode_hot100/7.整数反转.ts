/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let flag: number = 1;
  let num = x;
  let res: number = 0;
  if (num < 0) {
    flag = -1;
    num = -num;
  }
  while (num > 0) {
    res = res * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  res *= flag;
  if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) return 0;
  return res;
}
// @lc code=end

reverse(11);
