/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  function min(a: number, b: number): number {
    if (a < b) return a;
    return b;
  }
  const matrix: number[][] = [];
  for (let i = 0; i <= s.length; i++) {
    matrix[0] = [];
    matrix[0][i] = 0;
    matrix[i] = [0];
    matrix[i][i] = 1;
  }
  if (!s) return s;
  let res: string = '';
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= min(s.length - i, i - 1); j++) {
      if (j === 0) {
        let newRes = '';
        if (s[i - 1] !== s[i]) {
          newRes = s[i - 1];
        } else {
          newRes = s.substr(i - 1, 2);
          matrix[i][i + 1] = 2;
        }
        if (newRes.length > res.length) res = newRes;
      }
      if (j > 0) {
        if (matrix[i - (j - 1)][i + (j - 1)] !== 0) {
          // eslint-disable-next-line operator-linebreak
          matrix[i - j][i + j] =
            s[i - j - 1] === s[i + j - 1] ? matrix[i - (j - 1)][i + (j - 1)] + 2 : 0;
        }
        if (matrix[i - (j - 1)][i + 1 + (j - 1)] !== 0) {
          // eslint-disable-next-line operator-linebreak
          matrix[i - j][i + 1 + j] =
            s[i - j - 1] === s[i + j] ? matrix[i - (j - 1)][i + 1 + (j - 1)] + 2 : 0;
        }
        if (matrix[i - j][i + j] > res.length) {
          res = s.substring(i - j - 1, i + j);
        }
        if (matrix[i - j][i + 1 + j] > res.length) {
          res = s.substring(i - j - 1, i + j + 1);
        }
      }
    }
  }
  return res;
}
// @lc code=end

console.log(longestPalindrome('aacabdkacaa'));
