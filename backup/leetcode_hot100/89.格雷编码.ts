/*
 * @lc app=leetcode.cn id=89 lang=typescript
 *
 * [89] 格雷编码
 */

// @lc code=start
function grayCode(n: number): number[] {
  /**
   * 设 n 阶格雷码集合为 G(n)，则 G(n+1) 阶格雷码为：
   *
   * 给 G(n) 阶格雷码每个元素二进制形式前面添加 0，得到 G'(n)；
   *
   * 设 G(n) 集合倒序（镜像）为 R(n)，
   * 给 R(n) 每个元素二进制形式前面添加 1，得到 R′(n)；
   *
   * G(n+1) = G'(n) ∪ R'(n) 拼接两个集合即可得到下一阶格雷码。
   *
   */

  let res: string[] = ['0', '1'];

  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  for (let i = 2; i <= n; i++) {
    const g: string[] = res.map((item) => `0${item}`);
    const r: string[] = res.map((item) => `1${item}`).reverse();
    res = g.concat(...r);
  }
  return res.map((item) => parseInt(item, 2));
}
// @lc code=end
console.log(grayCode(1));
