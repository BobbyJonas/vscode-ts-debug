/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let minStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let maxLen = 0;
    for (let k = 0; k < minStr.length; k++) {
      if (minStr[k] === strs[i][k]) maxLen++;
      else break;
    }
    minStr = minStr.substr(0, maxLen);
    if (minStr.length === 0) return '';
  }

  return minStr;
}
// @lc code=end

console.log(longestCommonPrefix(['']));
