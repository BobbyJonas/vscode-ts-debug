/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const current: number[] = [];
  const res: string[] = [];
  function backtrack(currentIndex: number, digit: number): void {
    if (digit <= 2) {
      for (let i = currentIndex; i < s.length; i++) {
        const str = s.substring(currentIndex, i + 1);
        const value = parseInt(s.substring(currentIndex, i + 1), 10);
        if (value >= 0 && value <= 255 && (str === '0' || str[0] !== '0')) {
          current.push(value);
          backtrack(i + 1, digit + 1);
          current.pop();
        } else break;
      }
    } else {
      const str = s.substring(currentIndex);
      const value = parseInt(str, 10);
      if (value >= 0 && value <= 255 && (str === '0' || str[0] !== '0')) {
        current.push(value);
        res.push(current.join('.'));
        current.pop();
      }
    }
  }

  backtrack(0, 0);
  return res;
}
// @lc code=end
console.log(restoreIpAddresses('25525511135'));
