/*
 * @lc app=leetcode.cn id=172 lang=typescript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
function trailingZeroes(n: number): number {
  let count2 = 0;
  let count5 = 0;
  let res = 0;
  for (let i = 1; i <= n; i++) {
    let k = i;
    while (k % 2 === 0) {
      k /= 2;
      count2++;
    }
    while (k % 5 === 0) {
      k /= 5;
      count5++;
    }
    while (count2 > 0 && count5 > 0) {
      res++;
      count2--;
      count5--;
    }
  }
  return res;
}
// @lc code=end
