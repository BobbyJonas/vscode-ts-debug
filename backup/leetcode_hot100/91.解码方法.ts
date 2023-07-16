/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
  const dp: number[] = [];
  dp[0] = s[0] !== '0' ? 1 : 0;
  if (dp[0] === 0) return 0;
  for (let i = 1; i <= s.length; i++) {
    dp[i] = dp[i - 1];
    if (i >= 2) {
      const value = parseInt(s.substr(i - 2, 2), 10);
      if (s[i - 1] === '0') {
        if (s[i - 2] === '0') return 0;
        dp[i] = value >= 10 && value <= 26 ? dp[i - 2] ?? 0 : 0;
      } else if (s[i - 2] === '0') dp[i] = dp[i - 2] ?? 0;
      else if (value >= 11 && value <= 26 && s[i] !== '0') dp[i] = dp[i - 1] + dp[i - 2];
      if (dp[i] === 0) return 0;
    }
  }
  return dp[s.length];
}
// @lc code=end
console.log(numDecodings('10'));
