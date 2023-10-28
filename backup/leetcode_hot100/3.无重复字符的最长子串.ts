/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const hashMap: {
    [prop: string]: number;
  } = {};
  if (!s) return 0;
  let res: number = 0;
  let start: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === undefined) hashMap[s[i]] = i;
    else if (hashMap[s[i]] < start) hashMap[s[i]] = i;
    else {
      const newRes = i - start;
      res = newRes > res ? newRes : res;
      start = hashMap[s[i]] + 1;
      hashMap[s[i]] = i;
    }
  }
  const newRes = s.length - start;
  res = newRes > res ? newRes : res;
  return res;
}
// @lc code=end

console.log(lengthOfLongestSubstring('abba'));
