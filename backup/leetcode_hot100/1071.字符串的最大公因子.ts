/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=1071 lang=typescript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
  const shortStr = str1.length > str2.length ? str2 : str1;
  const longStr = str1.length > str2.length ? str1 : str2;

  for (let currentLen = shortStr.length; currentLen >= 1; currentLen--) {
    const currentString = shortStr.substring(0, currentLen);

    if (shortStr.length % currentLen === 0 && longStr.length % currentLen === 0) {
      let shortStringValid = false;
      let longStringValid = false;

      let reduceString = currentString;
      while (reduceString.length <= shortStr.length) {
        if (reduceString === shortStr) shortStringValid = true;
        reduceString += currentString;
      }

      reduceString = currentString;
      while (reduceString.length <= longStr.length) {
        if (reduceString === longStr) longStringValid = true;
        reduceString += currentString;
      }

      if (shortStringValid && longStringValid) return currentString;
    }
  }
  return '';
}
// @lc code=end
