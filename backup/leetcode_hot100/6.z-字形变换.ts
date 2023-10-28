/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  const strArray: string[][] = [];
  let i1 = 0;
  let j1 = 0;
  const dirI = [1, -1];
  const dirJ = [0, 1];
  let dir = 0;
  if (numRows === 1) return s;
  for (let i = 0; i < s.length; i++) {
    if (!strArray[i1]) strArray[i1] = [];
    strArray[i1][j1] = s[i];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let i1_0 = i1 + dirI[dir];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let j1_0 = j1 + dirJ[dir];
    if (i1_0 > numRows - 1 || i1_0 < 0) {
      dir = 1 - dir;
      i1_0 = i1 + dirI[dir];
      j1_0 = j1 + dirJ[dir];
    }
    i1 = i1_0;
    j1 = j1_0;
  }
  let res = '';
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= j1; j++) {
      if (strArray?.[i]?.[j] !== undefined) res += strArray[i][j];
    }
  }
  return res;
}
// @lc code=end

convert('1', 1);
