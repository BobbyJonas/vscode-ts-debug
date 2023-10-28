/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) return i;
  }
  return -1;
}
// @lc code=end
strStr('', '');
