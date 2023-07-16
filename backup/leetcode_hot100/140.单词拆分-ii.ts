/*
 * @lc app=leetcode.cn id=140 lang=typescript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): string[] {
  const wordHash: {
    [prop: string]: boolean;
  } = {};
  for (let i = 0; i < wordDict.length; i++) {
    wordHash[wordDict[i]] = true;
  }
  const dp: boolean[][] = [];
  const rec: any = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];
    rec[i] = [];
    for (let j = 0; j <= s.length; j++) {
      dp[i][j] = false;
      rec[i][j] = [];
    }
  }
  for (let j = 1; j <= s.length; j++) {
    for (let i = 1; i <= s.length - j + 1; i++) {
      dp[i][j] = Boolean(wordHash[s.substring(i - 1, i + j - 1)]);
      if (dp[i][j]) {
        rec[i][j].push([s.substring(i - 1, i + j - 1)]);
      }
      for (let k = 2; k <= j; k++) {
        dp[i][j] = dp[i][j] || (dp[i][k - 1] && dp[i + k - 1][j - k + 1]);
        if (dp[i][k - 1] && dp[i + k - 1][j - k + 1]) {
          rec[i][j].push([rec[i][k - 1], rec[i + k - 1][j - k + 1]]);
        }
      }
    }
  }

  function print(arr: any): string[] {
    if (Array.isArray(arr)) {
      const res: string[] = [];
      const hashMap: {
        [prop: string]: boolean;
      } = {};
      for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current.length === 2) {
          const l = print(current[0]);
          const r = print(current[1]);
          for (let i0 = 0; i0 < l.length; i0++) {
            for (let j = 0; j < r.length; j++) {
              if (!hashMap[`${l[i0]} ${r[j]}`]) {
                res.push(`${l[i0]} ${r[j]}`);
                hashMap[`${l[i0]} ${r[j]}`] = true;
              }
            }
          }
        } else if (!hashMap[current[0]]) {
          res.push(current[0]);
          hashMap[current[0]] = true;
        }
      }
      return res;
    }
    return [arr as string];
  }
  console.log(rec[1][s.length]);

  return print(rec[1][s.length]);
}
// @lc code=end
console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
