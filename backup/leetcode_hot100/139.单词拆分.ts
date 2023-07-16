/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordHash: {
    [prop: string]: boolean;
  } = {};
  for (let i = 0; i < wordDict.length; i++) {
    wordHash[wordDict[i]] = true;
  }
  const dp: boolean[][] = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= s.length; j++) {
      dp[i][j] = false;
    }
  }
  for (let j = 1; j <= s.length; j++) {
    for (let i = 1; i <= s.length - j + 1; i++) {
      dp[i][j] = Boolean(wordHash[s.substring(i - 1, i + j - 1)]);
      if (!dp[i][j]) {
        for (let k = 2; k <= j; k++) {
          dp[i][j] = dp[i][k - 1] && dp[i + k - 1][j - k + 1];
          if (dp[i][j]) break;
        }
      }
    }
  }
  return dp[1][s.length];
}
// @lc code=end
console.log(wordBreak('ab', ['a', 'b']));
