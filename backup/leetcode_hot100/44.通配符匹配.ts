/*
 * @lc app=leetcode.cn id=44 lang=typescript
 *
 * [44] 通配符匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const match: boolean[][] = [];
  match[0] = [];
  match[0][0] = true;
  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === '*') {
      match[0][i] = true;
    } else {
      break;
    }
  }

  for (let i = 1; i <= s.length; i++) {
    if (!match[i]) match[i] = [];
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') match[i][j] = match[i - 1][j] || match[i][j - 1];
      else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) match[i][j] = match[i - 1][j - 1];
    }
  }
  return Boolean(match[s.length][p.length]);
}
// @lc code=end

console.log(isMatch('mississippi', 'm??*ss*?i*pi'));
