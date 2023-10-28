/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
  const l = nums.length - 1;
  function findPivot(start: number, end: number): number {
    let i = start;
    let j = end;
    if (nums[j] < nums[j - 1]) return j - 1;
    while (i < j) {
      const k = Math.floor((j + i) / 2);
      if (nums[k] < nums[end] && nums[k - 1] >= nums[start]) return k - 1;
      if (nums[k] <= nums[end] && nums[k - 1] > nums[start]) return k - 1;
      if (nums[k + 1] < nums[end] && nums[k] >= nums[start]) return k;
      if (nums[k + 1] <= nums[end] && nums[k] > nums[start]) return k;
      if (nums[k] > nums[start]) i = k + 1;
      else if (nums[k] < nums[end]) j = k - 1;
      else {
        const pivot1 = findPivot(start, k);
        const pivot2 = findPivot(k + 1, end);
        if (pivot1 !== -1) return pivot1;
        if (pivot2 !== -1) return pivot2;
        return -1;
      }
    }
    return -1;
  }
  function binarySearch(start: number, end: number): boolean {
    let i = start;
    let j = end;
    while (i < j) {
      const k = Math.floor((j + i) / 2);
      if (nums[k] === target) return true;
      if (nums[k] <= target) i = k + 1;
      else j = k - 1;
    }
    return nums[i] === target || nums[j] === target;
  }
  const pivot = findPivot(0, l);
  return binarySearch(0, pivot) || binarySearch(pivot + 1, l);
}
// @lc code=end
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
