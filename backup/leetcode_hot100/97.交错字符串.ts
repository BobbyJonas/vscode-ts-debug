/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  const dp: boolean[][] = [[true]];
  if (s1.length + s2.length !== s3.length) return false;

  for (let i = 1; i <= s1.length && s1.charAt(i - 1) === s3.charAt(i - 1); i++) dp[i] = [true];
  for (let j = 1; j <= s2.length && s2.charAt(j - 1) === s3.charAt(j - 1); j++) dp[0][j] = true;
  for (let i = 1; i <= s1.length; i++) {
    if (!dp[i]) dp[i] = [];
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s3.charAt(i + j - 1) === s1.charAt(i - 1)) ||
        (dp[i][j - 1] && s3.charAt(i + j - 1) === s2.charAt(j - 1));
    }
  }
  return Boolean(dp[s1.length][s2.length]);
}
// @lc code=end
console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
