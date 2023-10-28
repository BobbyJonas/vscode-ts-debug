/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 */

// @lc code=start
function fractionToDecimal(numerator: number, denominator: number): string {
  let sym = 1;
  if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) sym = -1;
  let a = Math.abs(numerator);
  const b = Math.abs(denominator);

  const map: {
    [prop: string]: number;
  } = {};

  const res: Array<{
    val: string;
    r: number;
  }> = [];

  const c = Math.floor(a / b);
  const r = a % b;
  res.push({ val: String(c), r });
  map[String(r)] = res.length - 1;
  a = r;

  let repeatIndex = -1;

  while (a > 0) {
    a *= 10;
    if (a < b) {
      res.push({ val: '0', r: a % b });
      map[String(a % b)] = res.length - 1;
    } else {
      const _c = Math.floor(a / b);
      const _r = a % b;
      res.push({ val: String(_c), r: _r });
      a = _r;
      if (map[String(a)] >= 0) {
        repeatIndex = map[String(a)];
        break;
      }
      map[String(_r)] = res.length - 1;
    }
  }

  let resString = '';
  for (let i = 0; i < res.length; i++) {
    resString += res[i].val;
    if (i === 0 && res.length > 1) resString += '.';
    if (repeatIndex === i) resString += '(';
  }
  if (repeatIndex >= 0) resString += ')';
  return sym === -1 ? `-${resString}` : resString;
}
// @lc code=end
console.log(fractionToDecimal(2, 1));
console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(4, 333));
