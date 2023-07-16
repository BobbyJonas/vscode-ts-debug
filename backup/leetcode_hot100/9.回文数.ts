/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const s: string = x.toString();
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
    if (i > s.length / 2) return true;
  }
  return true;
}
// @lc code=end

console.log(isPalindrome(1));
