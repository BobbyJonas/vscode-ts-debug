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

function TreeDepth(pRoot: TreeNode): number {
  let res: number = 0;
  function treeRecursion(_pRoot: TreeNode | null, depth: number): void {
    if (!_pRoot) return;
    if (depth > res) res = depth;
    treeRecursion(_pRoot.left, depth + 1);
    treeRecursion(_pRoot.right, depth + 1);
  }
  treeRecursion(pRoot, 1);
  return res;
}
