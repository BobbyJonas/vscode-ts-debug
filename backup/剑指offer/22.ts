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

function PrintFromTopToBottom(root: TreeNode): number[] {
  let queue: TreeNode[] = [root];
  let result: number[] = [];
  function addQueue(root: TreeNode): void {
    queue.shift();
    if (root) {
      if (root.val) result.push(root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
  }
  while (queue.length > 0) {
    addQueue(queue[0]);
  }
  return result;
}
