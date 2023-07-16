/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 1) return 1;
  let a = 0;
  let b = x;
  while (b - a > 1) {
    const c = Math.floor((b + a) / 2);
    if (c * c < x) a = c;
    else if (c * c > x) b = c;
    else return c;
  }
  return a;
}
// @lc code=end
console.log(mySqrt(8));
