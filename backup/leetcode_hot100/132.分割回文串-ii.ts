/*
 * @lc app=leetcode.cn id=132 lang=typescript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
function minCut(s: string): number {
  const f: boolean[][] = [];
  for (let k = 1; k <= s.length; k++) {
    for (let i = 1; i <= s.length - k + 1; i++) {
      if (!f[i]) f[i] = [];
      if (k === 1) f[i][i + k - 1] = true;
      else if (k === 2) f[i][i + k - 1] = s[i - 1] === s[i];
      else {
        f[i][i + k - 1] = f[i + 1][i + k - 2] && s[i - 1] === s[i + k - 2];
      }
    }
  }
  const res: number[][] = [];
  for (let i = 1; i <= s.length; i++) {
    if (!res[i]) res[i] = [];
    if (f[1][i]) {
      res[1][i] = 0;
    } else {
      res[1][i] = Infinity;
      for (let k = 1; k <= i; k++) {
        if (f[k][i]) {
          res[1][i] = Math.min(res[1][i], res[1][k - 1] + 1);
        }
      }
    }
  }
  return res[1][s.length];
}
// @lc code=end
console.log(minCut('efe'));
