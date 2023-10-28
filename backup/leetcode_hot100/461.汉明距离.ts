/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  const transOct2Bin = (num: number): string => {
    let res: string = '';
    while (num > 0) {
      res = `${num % 2}${res}`;
      // eslint-disable-next-line no-param-reassign
      num = Math.floor(num / 2);
    }
    return res;
  };

  let x0 = transOct2Bin(x);
  let y0 = transOct2Bin(y);

  while (x0.length < y0.length) x0 = `0${x0}`;
  while (x0.length > y0.length) y0 = `0${y0}`;

  let s = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < x0.length; i++) {
    // eslint-disable-next-line no-plusplus
    if (x0[i] !== y0[i]) s++;
  }
  return s;
}
// @lc code=end
