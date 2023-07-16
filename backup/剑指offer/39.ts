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

function IsBalanced_Solution(pRoot: TreeNode): boolean {
  let flagContinue: boolean = true;
  function max(a: number, b: number): number {
    if (a > b) return a;
    else return b;
  }
  function treeRecursion(_pRoot: TreeNode | null, depth: number): number {
    if (!_pRoot) return depth;
    let leftDepth: number = flagContinue ? treeRecursion(_pRoot.left, depth + 1) : Number.MAX_VALUE;
    let rightDepth: number = flagContinue
      ? treeRecursion(_pRoot.right, depth + 1)
      : Number.MAX_VALUE;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      flagContinue = false;
    }
    return max(leftDepth, rightDepth);
  }
  treeRecursion(pRoot, 1);
  return flagContinue;
}
