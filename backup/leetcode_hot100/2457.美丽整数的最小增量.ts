/*
 * @lc app=leetcode.cn id=2457 lang=typescript
 *
 * [2457] 美丽整数的最小增量
 */

// @lc code=start
function makeIntegerBeautiful(n: number, target: number): number {
  let str: string = '';
  let n1 = n;
  while (n1 > 0) {
    str = String(n1 % 10) + str;
    n1 = Math.floor(n1 / 10);
  }

  let sumDigit: number = 0;
  let sum: number = 0;
  let recIndex: number = -Infinity;
  for (let i = 0; i < str.length; i++) {
    sumDigit += Number(str[i]);
    if (sumDigit <= target && i === str.length - 1) return 0;
    if (sumDigit >= target && recIndex === -Infinity) {
      recIndex = i - 1;
      sum++;
    }
    if (recIndex === -Infinity) sum = sum * 10 + Number(str[i]);
  }

  sum *= 10 ** (str.length - recIndex - 1);

  return sum - n;
}
// @lc code=end
console.log(makeIntegerBeautiful(1, 1));
