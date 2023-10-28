/* eslint-disable no-underscore-dangle */
/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  const resSymbol: boolean = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  const a = dividend < 0 ? -dividend : dividend;
  const b = divisor < 0 ? -divisor : divisor;

  if (a < b) return 0;
  let base = b;
  let res = 1;
  while (a >= base + base) {
    base += base;
    res += res;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _res = resSymbol ? res + divide(a - base, b) : -(res + divide(a - base, b));
  return _res > 2147483647 ? 2147483647 : _res;
}
// @lc code=end

console.log(divide(-2147483648, -1));
