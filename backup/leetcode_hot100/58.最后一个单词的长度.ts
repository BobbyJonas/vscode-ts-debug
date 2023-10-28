/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let j = s.length - 1;
  while (s[j] === ' ') j--;
  let i = j;
  while (s[i] !== ' ' && i >= 0) i--;
  return j - i;
}
// @lc code=end
