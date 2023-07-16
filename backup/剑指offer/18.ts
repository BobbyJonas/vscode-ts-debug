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

function Mirror(pRoot: TreeNode): TreeNode {
  if (!pRoot) return pRoot;
  let new_pRoot: TreeNode = {
    val: pRoot.val,
    left: pRoot.right ? Mirror(pRoot.right) : null,
    right: pRoot.left ? Mirror(pRoot.left) : null,
  };
  return new_pRoot;
}
