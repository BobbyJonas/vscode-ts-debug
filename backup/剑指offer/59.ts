interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function Print(pRoot: TreeNode): number[][] {
  if (!pRoot) return [];
  const queue: TreeNode[][] = [[pRoot]];
  const result: number[][] = [];
  let flagOrder: boolean = false;

  while (queue.length > 0) {
    const newRound: TreeNode[] = [];
    const newRes: number[] = [];
    for (let i = 0; i < queue[0].length; i++) {
      const currentNode = !flagOrder ? queue[0][i] : queue[0][queue[0].length - i - 1];
      // const currentNode = queue[0][i];

      newRes.push(currentNode.val);
      if (!flagOrder) {
        if (currentNode.right) newRound.unshift(currentNode.right);
        if (currentNode.left) newRound.unshift(currentNode.left);
      } else {
        if (currentNode.left) newRound.push(currentNode.left);
        if (currentNode.right) newRound.push(currentNode.right);
      }
    }
    flagOrder = !flagOrder;
    if (newRound.length > 0) queue.push(newRound);
    queue.shift();
    result.push(newRes);
  }
  return result;
}

const myTree = {
  val: 1,
  left: null,
  right: null,
};

Print(myTree);
