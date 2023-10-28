/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
  const hashMap: {
    [prop: string]: boolean;
  } = {};
  const res: string[] = [];
  for (let i = 0; i <= s.length - 10; i++) {
    const current = s.slice(i, i + 10);
    if (hashMap[current] === false) {
      res.push(current);
      hashMap[current] = true;
    }
    if (hashMap[current] === undefined) {
      hashMap[current] = false;
    }
  }
  return res;
}
// @lc code=end
