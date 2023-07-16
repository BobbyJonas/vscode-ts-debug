/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
  let current: string = '1';
  if (n <= 0) return '';
  if (n === 1) return current;
  for (let k = 2; k <= n; k++) {
    let newStr: string = '';
    let currentChar: string = '';
    let currentCharNum: number = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== currentChar) {
        if (currentCharNum > 0) {
          newStr += `${currentCharNum}${currentChar}`;
        }
        currentChar = current[i];
        currentCharNum = 1;
      } else {
        currentCharNum++;
      }
    }
    if (currentCharNum > 0) {
      newStr += `${currentCharNum}${currentChar}`;
    }
    current = newStr;
  }
  return current;
}
// @lc code=end
console.log(countAndSay(4));
