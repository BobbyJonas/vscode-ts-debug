/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const rules = [
    {
      num: 1,
      pattern: 'I',
    },
    { num: 4, pattern: 'IV', exact: true },
    { num: 5, pattern: 'V' },
    { num: 9, pattern: 'IX', exact: true },
    { num: 10, pattern: 'X' },
    { num: 40, pattern: 'XL', exact: true },
    { num: 50, pattern: 'L' },
    { num: 90, pattern: 'XC', exact: true },
    { num: 100, pattern: 'C' },
    { num: 400, pattern: 'CD', exact: true },
    { num: 500, pattern: 'D' },
    { num: 900, pattern: 'CM', exact: true },
    { num: 1000, pattern: 'M' },
  ];
  let s1 = s;
  let res = 0;
  while (s1.length > 0) {
    for (let i = rules.length - 1; i >= 0; i--) {
      if (s1.substr(0, rules[i].pattern.length) === rules[i].pattern) {
        res += rules[i].num;
        s1 = s1.substring(rules[i].pattern.length);
        break;
      }
    }
  }
  return res;
}
// @lc code=end

romanToInt('X');
