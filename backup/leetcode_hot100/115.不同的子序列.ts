/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
  const dp: number[][] = [[]];
  const res: number = 0;
  for (let i = 0; i <= s.length; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i <= t.length; i++) {
    if (!dp[i]) dp[i] = [0];
    for (let j = 1; j <= s.length; j++) {
      dp[i][j] = (dp?.[i]?.[j - 1] ?? 0) + (dp[i - 1][j - 1] ?? 0);
      dp[i][j] = t[i - 1] === s[j - 1] ? dp[i][j] : dp[i][j - 1];
    }
  }
  return dp[t.length][s.length];
}
// @lc code=end
console.log(numDistinct('babgbag', 'bag'));
