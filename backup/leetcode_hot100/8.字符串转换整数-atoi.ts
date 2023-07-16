/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let i = 0;
  let k = s.length - 1;
  let flag = 1;
  let res = 0;
  if (k < 0) return res * flag;
  while (s[i] === ' ') i++;
  while (s[k] === ' ') k--;
  if (i > k) return res * flag;
  if (s[i] === '+') i++;
  else if (s[i] === '-') {
    flag = -1;
    i++;
  }
  while (i <= k) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      res = res * 10 + parseInt(s[i], 10);
    } else {
      return res * flag;
    }
    if (res * flag > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (res * flag < -Math.pow(2, 31)) return -Math.pow(2, 31);
    i++;
  }
  return res * flag;
}
// @lc code=end

console.log(myAtoi('4193 with words'));
