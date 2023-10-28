/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=1408 lang=typescript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
function stringMatching(words: string[]): string[] {
  const res: Record<string, boolean> = {};
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // eslint-disable-next-line no-continue
      if (i === j) continue;
      if (words[i].includes(words[j])) {
        res[words[j]] = true;
      }
    }
  }
  return Object.keys(res);
}
// @lc code=end
