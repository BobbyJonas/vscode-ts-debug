/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=829 lang=typescript
 *
 * [829] 连续整数求和
 */

// @lc code=start
function consecutiveNumbersSum(n: number): number {
  let ans = 0;
  // eslint-disable-next-line no-param-reassign
  n *= 2;
  for (let k = 1; k * k < n; k++) {
    // eslint-disable-next-line no-continue
    if (n % k !== 0) continue;
    if ((n / k - (k - 1)) % 2 === 0) ans++;
  }
  return ans;
}
// @lc code=end
