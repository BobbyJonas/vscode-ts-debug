/* eslint-disable no-empty */
/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
  const rules: any[] = [
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
  let res: string = '';
  let num0 = num;
  for (let i = rules.length - 1; i >= 0; i--) {
    const newNumLen = (num0 - rules[i].num).toString().length;
    const oldNumLen = num0.toString().length;

    // eslint-disable-next-line prettier/prettier
    if (
      // eslint-disable-next-line operator-linebreak
      rules[i].exact === true &&
      // eslint-disable-next-line operator-linebreak
      num0 >= rules[i].num &&
      (num0 - rules[i].num === 0 || newNumLen < oldNumLen)
    ) {
      num0 -= rules[i].num;
      res += rules[i].pattern;
    } else if (!rules[i].exact && num0 >= rules[i].num) {
      let times = Math.floor(num0 / rules[i].num);
      while (times > 0) {
        times--;
        res += rules[i].pattern;
        num0 -= rules[i].num;
      }
    }
  }
  return res;
}
// @lc code=end

console.log(intToRoman(20));
