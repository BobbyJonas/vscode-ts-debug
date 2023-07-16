/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const a: number[] = [0, 1, 2, 3, 5];
  for (let i = 3; i <= n; i++) {
    a[i] = a?.[i - 1] + a?.[i - 2];
  }
  return a[n];
}
// @lc code=end
