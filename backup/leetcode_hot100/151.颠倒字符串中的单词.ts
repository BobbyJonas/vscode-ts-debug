/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  let res: string = '';
  let current: string = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (current) {
        res = !res ? current : `${current} ${res}`;
      }
      current = '';
    } else {
      current += s[i];
    }
  }
  if (current) {
    res = !res ? current : `${current} ${res}`;
  }
  return res;
}
// @lc code=end
reverseWords('the sky is blue');
