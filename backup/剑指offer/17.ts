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
export function HasSubtree(pRoot1: TreeNode, pRoot2: TreeNode): boolean {
  function treeRecursion(pRoot1: TreeNode, pRoot2: TreeNode, flag: boolean): boolean {
    if (!flag) {
      if (pRoot1.val === pRoot2.val && treeRecursion(pRoot1, pRoot2, true)) return true;
      if (pRoot1.left && treeRecursion(pRoot1.left, pRoot2, false)) return true;
      if (pRoot1.right && treeRecursion(pRoot1.right, pRoot2, false)) return true;
      return false;
    } else {
      if (pRoot1.val !== pRoot2.val) return false;
      if (pRoot2.left && !pRoot1.left) return false;
      if (pRoot2.right && !pRoot1.right) return false;

      if (pRoot1.left && pRoot2.left && !treeRecursion(pRoot1.left, pRoot2.left, true))
        return false;
      if (pRoot1.right && pRoot2.right && !treeRecursion(pRoot1.right, pRoot2.right, true))
        return false;
      return true;
    }
  }
  if (!pRoot1?.left && !pRoot1?.right && !pRoot1?.val) return false;
  if (!pRoot2?.left && !pRoot2?.right && !pRoot2?.val) return false;
  return treeRecursion(pRoot1, pRoot2, false);
}
