/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  const arr: number[] = [];
  while (n > 0) {
    arr.push(n % 2);
    n = Math.floor(n / 2);
  }
  while (arr.length < 32) arr.push(0);
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * 2 ** (arr.length - i - 1);
  }
  return res;
}
// @lc code=end
console.log(reverseBits(43261596));
