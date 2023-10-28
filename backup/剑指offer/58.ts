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

function isSymmetrical(pRoot: TreeNode): boolean {
  if (!pRoot) return true;
  function treeRecursionCompare(leftTree: TreeNode | null, rightTree: TreeNode | null): boolean {
    if (!leftTree && rightTree) return false;
    if (leftTree && !rightTree) return false;
    if (!leftTree && !rightTree) return true;
    if (leftTree && rightTree) {
      if (leftTree.val !== rightTree.val) return false;
      return (
        treeRecursionCompare(leftTree.left, rightTree.right)
        && treeRecursionCompare(leftTree.right, rightTree.left)
      );
    }
    return true;
  }
  return treeRecursionCompare(pRoot.left, pRoot.right);
}
