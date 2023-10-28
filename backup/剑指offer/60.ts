interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function Print(pRoot: TreeNode): number[][] {
  if (!pRoot) return [];
  const queue: (TreeNode | boolean)[] = [pRoot, true];
  const result: number[][] = [];
  let currentNum: number[] = [];
  while (queue.length > 0) {
    const current = queue.shift();
    if (typeof current === 'boolean') {
      result.push(currentNum);
      currentNum = [];
      if (queue.length > 0) queue.push(true);
    } else {
      if (current?.left) queue.push(current.left);
      if (current?.right) queue.push(current.right);
      if (current?.val) currentNum.push(current?.val);
    }
  }
  return result;
}
