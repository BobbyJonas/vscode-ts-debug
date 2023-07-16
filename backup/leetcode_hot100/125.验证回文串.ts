/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let s1 = '';
  const l0 = s.length;
  for (let i = 0; i < l0; i++) {
    const currentLetter = s[i].toLocaleLowerCase();
    if (
      (currentLetter >= 'a' && currentLetter <= 'z') ||
      (currentLetter >= '0' && currentLetter <= '9')
    ) {
      s1 += currentLetter;
    }
  }
  const l1 = s1.length;
  for (let i = 0; i < l1; i++) {
    if (s1[i] !== s1[l1 - i - 1]) return false;
  }
  return true;
}
// @lc code=end
console.log(isPalindrome('A man, a plan, a canal: Panama'));
