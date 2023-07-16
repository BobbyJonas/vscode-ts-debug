/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const useHash: {
    [prop: number]: boolean;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    useHash[nums[i]] = true;
  }
  let res: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (useHash[nums[i]]) {
      useHash[nums[i]] = false;
      let current = 1;
      const k = nums[i];
      let k1 = k - 1;
      let k2 = k + 1;
      while (useHash[k1]) {
        useHash[k1] = false;
        k1--;
        current++;
      }
      while (useHash[k2]) {
        useHash[k2] = false;
        k2++;
        current++;
      }
      if (current > res) res = current;
    }
  }
  return res;
}
// @lc code=end
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
