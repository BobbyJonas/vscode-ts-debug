/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!(preorder?.length > 0) || !(inorder?.length > 0)) return null;
  if (preorder.length !== inorder.length) return null;
  const currentRoot = preorder[0];
  const idx1 = inorder.indexOf(currentRoot);
  const idx2 = idx1;
  return {
    val: currentRoot,
    left: buildTree(preorder.slice(1, idx2 + 1), inorder.slice(0, idx1)),
    right: buildTree(preorder.slice(idx2 + 1), inorder.slice(idx1 + 1)),
  };
}
// @lc code=end
console.log(buildTree([1, 2, 3], [2, 3, 1]));
