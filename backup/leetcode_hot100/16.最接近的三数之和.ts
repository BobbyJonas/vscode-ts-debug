/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  let ans: number = Infinity;
  nums.sort((a, b) => a - b);
  for (let k = 0; k < nums.length; k++) {
    let i0 = 0;
    let i1 = nums.length - 1;
    while (i0 < k && i1 > k) {
      const currentNum = nums[i0] + nums[k] + nums[i1];
      if (Math.abs(currentNum - target) < Math.abs(ans - target)) ans = currentNum;
      if (currentNum > target) {
        i1--;
      } else if (currentNum < target) {
        i0++;
      } else return currentNum;
    }
  }
  return ans;
}
// @lc code=end

console.log(threeSumClosest([-1, 2, 1, -4], 2));
