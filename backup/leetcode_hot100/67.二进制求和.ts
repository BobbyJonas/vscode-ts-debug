/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const p1 = a.length > b.length ? a : b;
  const p2 = a.length > b.length ? b : a;
  const res: number[] = [];
  for (let i = p1.length - 1; i >= 0; i--) {
    const k = p1.length - 1 - i;
    if (!res[k]) res[k] = 0;
    res[k] += p2.length - 1 - k >= 0 ? +p1[i] + +p2[p2.length - 1 - k] : +p1[i];
    res[k + 1] = Math.floor(res[k] / 2);
    res[k] %= 2;
  }
  while (res.length > 1 && res[res.length - 1] === 0) res.pop();
  if (res.length === 0) return '0';
  return res.reverse().join('');
}
// @lc code=end
