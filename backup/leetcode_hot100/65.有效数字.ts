/*
 * @lc app=leetcode.cn id=65 lang=typescript
 *
 * [65] 有效数字
 */

// @lc code=start
function isNumber(s: string): boolean {
  function isInteger(str: string): boolean {
    if (!(str.length > 0)) return false;
    for (let i = 0; i < str.length; i++) {
      if (!(str[i] >= '0' && str[i] <= '9')) return false;
    }
    return true;
  }
  function isPureNumber(str: string): boolean {
    const idxPoint = str.indexOf('.');
    if (idxPoint < 0) {
      return isInteger(str);
    }
    if (idxPoint === 0 && str.length === 1) return false;
    if (idxPoint === 0) {
      return isInteger(str.substring(idxPoint + 1));
    }
    if (idxPoint === str.length - 1) {
      return isInteger(str.substring(0, idxPoint));
    }
    return isInteger(str.substring(0, idxPoint)) && isInteger(str.substring(idxPoint + 1));
  }
  function isPureNumberWithSymbol(str: string): boolean {
    let i = 0;
    if (['+', '-'].includes(str[i])) i++;
    return isPureNumber(str.substring(i));
  }

  const s1: string = s.toLowerCase();
  const idxE = s1.indexOf('e');
  if (idxE > 0) {
    const leftStr = s1.substring(0, idxE);
    let rightStr = s1.substring(idxE + 1);
    if (['+', '-'].includes(rightStr[0])) rightStr = rightStr.substring(1);
    return isPureNumberWithSymbol(leftStr) && isInteger(rightStr);
  }
  return isPureNumberWithSymbol(s1);
}
// @lc code=end
console.log(isNumber('-123.456e789'));
