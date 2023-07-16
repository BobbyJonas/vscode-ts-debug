/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  function backTrack(currentIndex: number, currentArr: number[]): void {
    res.push(JSON.parse(JSON.stringify(currentArr)));
    for (let i = currentIndex + 1; i < nums.length; i++) {
      backTrack(i, [...currentArr, nums[i]]);
    }
  }
  backTrack(-1, []);
  return res;
}
// @lc code=end
