/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  if (!root) return res;

  function treeRecursion(
    currentNode: TreeNode | null,
    currentNum: number,
    currentArr: number[]
  ): void {
    if (!currentNode?.left && !currentNode?.right) {
      if (currentNum === targetSum) res.push(JSON.parse(JSON.stringify(currentArr)));
      return;
    }
    if (currentNode?.left)
      treeRecursion(currentNode.left, currentNum + currentNode.left.val, [
        ...currentArr,
        currentNode.left.val,
      ]);
    if (currentNode?.right)
      treeRecursion(currentNode.right, currentNum + currentNode.right.val, [
        ...currentArr,
        currentNode.right.val,
      ]);
  }

  treeRecursion(root, root.val, [root.val]);
  return res;
}
// @lc code=end
