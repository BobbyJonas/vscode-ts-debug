/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// class TreeNode {
//   val: number;

//   left: TreeNode | null;

//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
// @lc code=start

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!(nums?.length > 0)) return null;
  const mid = Math.floor(nums.length / 2);
  return {
    val: nums[mid],
    left: sortedArrayToBST(nums.slice(0, mid)),
    right: sortedArrayToBST(nums.slice(mid + 1)),
  };
}
// @lc code=end
console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
