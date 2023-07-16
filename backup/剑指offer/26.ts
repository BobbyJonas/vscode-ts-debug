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

function Convert(pRootOfTree: TreeNode | null): TreeNode {
  let treeQueue: TreeNode[] = [];
  function treeRecursion(pRoot: TreeNode | null) {
    if (pRoot) {
      treeRecursion(pRoot.left);
      treeQueue.push({
        val: pRoot.val,
        left: null,
        right: null,
      });
      if (treeQueue.length > 1) {
        treeQueue[treeQueue.length - 1].left = treeQueue[treeQueue.length - 2];
        treeQueue[treeQueue.length - 2].right = treeQueue[treeQueue.length - 1];
      }
      treeRecursion(pRoot.right);
    }
  }
  treeRecursion(pRootOfTree);
  return treeQueue[0];
}
