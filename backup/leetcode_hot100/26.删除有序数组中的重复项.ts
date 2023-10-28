/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let l = nums.length;
  let t: number = nums[0];
  for (let i = 0; i < l; i++) {
    t = nums[i - 1] === Infinity ? t : nums[i - 1];
    if (nums[i] === t) {
      // eslint-disable-next-line no-param-reassign
      nums[i] = Infinity;
    }
  }
  let i1: number = 0;
  let i2: number = 0;
  while (i2 < nums.length) {
    while (nums[i2] === Infinity) {
      i2++;
      l--;
    }
    // eslint-disable-next-line no-param-reassign
    nums[i1] = nums[i2];
    i1++;
    i2++;
  }
  while (nums.length > l) nums.pop();
  console.log(nums);

  return nums.length;
}
// @lc code=end

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
