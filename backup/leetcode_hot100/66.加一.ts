/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  digits[digits.length - 1]++;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i > 0) {
      digits[i - 1] += Math.floor(digits[i] / 10);
      digits[i] %= 10;
    }
  }
  if (digits[0] >= 10) {
    digits[0] %= 10;
    digits.unshift(1);
  }
  return digits;
}
// @lc code=end
