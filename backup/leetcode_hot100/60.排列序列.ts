/*
 * @lc app=leetcode.cn id=60 lang=typescript
 *
 * [60] 排列序列
 */

// @lc code=start
function getPermutation(n: number, k: number): string {
  const candidates: number[] = [];
  for (let i = 1; i <= n; i++) candidates.push(i);
  const compare: number[] = [1];
  for (let i = 1; i < n; i++) {
    compare.push(compare[i - 1] * (i + 1));
  }
  let k1 = k - 1;
  const res: number[] = [];
  for (let i = n - 2; i >= 0; i--) {
    let counter: number = 0;
    if (k1 >= compare[i] && k1 < compare[i + 1]) {
      while (k1 >= compare[i]) {
        k1 -= compare[i];
        counter++;
      }
    }
    let idx: number = 0;
    while ((counter > 0 || candidates[idx] === 0) && idx < n) {
      if (candidates[idx] !== 0) counter--;
      idx++;
    }
    res.push(candidates[idx]);
    candidates[idx] = 0;
  }
  for (let i = 0; i < n; i++) {
    if (candidates[i] !== 0) res.push(candidates[i]);
  }
  return res.join('');
}
// @lc code=end
console.log(getPermutation(3, 1));
