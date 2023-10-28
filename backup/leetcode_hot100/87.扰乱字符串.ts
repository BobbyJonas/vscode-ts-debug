/*
 * @lc app=leetcode.cn id=87 lang=typescript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
function isScramble(s1: string, s2: string): boolean {
  const l = s1.length;
  const dp: boolean[][][] = [];
  for (let k = 1; k <= l; k++) {
    for (let i = 0; i < l; i++) {
      if (!dp[i]) dp[i] = [];
      for (let j = 0; j < l; j++) {
        if (!dp[i][j]) dp[i][j] = [];
        if (k === 1) {
          dp[i][j][k] = s1[i] === s2[j];
        } else {
          dp[i][j][k] = false;
          console.log(i, j, k);

          for (let w = 1; w < k; w++) {
            dp[i][j][k] = Boolean(
              (dp?.[i]?.[j]?.[w] && dp?.[i + w]?.[j + w]?.[k - w]) ||
                (dp?.[i]?.[j + w]?.[k - w] && dp?.[i + k - w]?.[j]?.[w])
            );
            if (dp[i][j][k]) break;
          }
        }
      }
    }
  }
  return dp[0][0][l];
}
// @lc code=end
// isScramble('great', 'rgeat');
