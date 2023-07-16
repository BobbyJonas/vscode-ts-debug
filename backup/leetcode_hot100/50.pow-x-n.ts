/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  let flag: boolean = false;
  if (n === 0) return 1;
  if (n < 0) {
    flag = true;
    n = -n;
  }
  let res = x;
  let rate = 1;
  const plusArr: number[] = [x];
  const rateArr: number[] = [1];
  while (rateArr[rateArr.length - 1] < n) {
    plusArr.push(plusArr[plusArr.length - 1] * plusArr[plusArr.length - 1]);
    rateArr.push(rateArr[rateArr.length - 1] + rateArr[rateArr.length - 1]);
  }
  while (rate < n) {
    if (rate + rateArr[rateArr.length - 1] > n) {
      plusArr.pop();
      rateArr.pop();
    } else {
      rate += rateArr[rateArr.length - 1];
      res *= plusArr[plusArr.length - 1];
    }
  }
  return !flag ? res : 1 / res;
}
// @lc code=end

console.log(myPow(2, 10));
