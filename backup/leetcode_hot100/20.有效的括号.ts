/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (s[i] === ')' && stack?.[stack.length - 1] !== '(') return false;
      if (s[i] === ']' && stack?.[stack.length - 1] !== '[') return false;
      if (s[i] === '}' && stack?.[stack.length - 1] !== '{') return false;
      stack.pop();
    }
  }
  return Boolean(stack.length === 0);
}
// @lc code=end

console.log(isValid(''));
