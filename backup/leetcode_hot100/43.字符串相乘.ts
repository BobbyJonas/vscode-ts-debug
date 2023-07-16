/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
  if (num1.length < num2.length) {
    const t = num1;
    num1 = num2;
    num2 = t;
  }
  const res: number[] = [];
  for (let i = 0; i < num2.length; i++) {
    for (let j = 0; j < num1.length; j++) {
      if (!res[i + j]) res[i + j] = 0;
      if (!res[i + j + 1]) res[i + j + 1] = 0;
      res[i + j] += +num2[num2.length - i - 1] * +num1[num1.length - j - 1];
      res[i + j + 1] += Math.floor(res[i + j] / 10);
      res[i + j] %= 10;
    }
  }
  while (res.length > 0 && res[res.length - 1] === 0) res.pop();
  return res.reverse().join('') || '0';
}
// @lc code=end

console.log(multiply('123', '456'));
