/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const a: boolean[][] = [];
  for (let i = 0; i <= s.length; i++) {
    a[i] = [false];
  }
  a[0][0] = true;
  for (let j = 1; j <= p.length; j++) a[0][j] = p[j - 1] === '*' ? a[0][j - 2] : false;
  for (let i = 1; i <= s.length; i++) a[i][0] = false;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        a[i][j] = a[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        a[i][j] =
          a[i][j - 1] ||
          a[i][j - 2] ||
          ((p[j - 2] === '.' || p[j - 2] === s[i - 1]) && a[i - 1][j]);
      } else {
        a[i][j] = false;
      }
    }
  }
  return a[s.length][p.length];
}
// @lc code=end

console.log(isMatch('baabbbaccbccacacc', 'c*..b*a*a.*a..*c'));
