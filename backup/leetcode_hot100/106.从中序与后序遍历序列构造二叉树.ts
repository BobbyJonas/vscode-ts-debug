/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!(postorder?.length > 0) || !(inorder?.length > 0)) return null;
  if (postorder.length !== inorder.length) return null;
  const currentRoot = postorder[postorder.length - 1];
  const idx1 = inorder.indexOf(currentRoot);
  const idx2 = idx1;
  return {
    val: currentRoot,
    left: buildTree(inorder.slice(0, idx1), postorder.slice(0, idx2)),
    right: buildTree(inorder.slice(idx1 + 1), postorder.slice(idx2, postorder.length - 1)),
  };
}
// @lc code=end
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
