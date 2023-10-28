/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=2364 lang=typescript
 *
 * [2364] 统计坏数对的数目
 */

// @lc code=start
function countBadPairs(_nums: number[]): number {
  let res = 0;
  const nums: number[] = [];
  for (let i = 0; i < _nums.length; i++) {
    nums[i] = _nums[i] - i;
  }
  const freq: number[] = [];
  const map: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] === undefined) map[num] = 0;
    else map[num]++;
    freq[i] = map[num];
    res += i - freq[i];
  }

  return res;
}
// @lc code=end
console.log(countBadPairs([1, 2, 3, 4, 5]));
