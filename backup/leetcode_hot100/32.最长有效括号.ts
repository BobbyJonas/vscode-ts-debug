/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  const queue: number[] = [];
  const validNumberQueue: number[] = [];

  let currentLen: number = 0;
  let bestLen: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (queue.length === 0) {
        currentLen = 0;
        if (currentLen > bestLen) bestLen = currentLen;
      } else {
        currentLen += 2;
        queue.pop();
        validNumberQueue.pop();
        const realCurrentLen = currentLen - (validNumberQueue[validNumberQueue.length - 1] || 0);
        if (realCurrentLen > bestLen) {
          bestLen = realCurrentLen;
        }
      }
    } else {
      queue.push(i);
      validNumberQueue.push(currentLen);
    }
  }
  return bestLen;
}
// @lc code=end

console.log(longestValidParentheses(')()())'));
