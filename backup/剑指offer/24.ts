function FindPath(root: TreeNode, expectNumber: number): number[][] {
  let result: number[][] = [];
  function moveForward(root: TreeNode, currentNumber: number, currentArray: number[]): void {
    if (!root) return;
    if (!root.val) return;
    let nextNumber: number = currentNumber + root.val;
    if (nextNumber > expectNumber) return;
    currentArray.push(root.val);
    if (nextNumber === expectNumber) {
      if (!root.left && !root.right) result.push(JSON.parse(JSON.stringify(currentArray)));
    } else if (nextNumber < expectNumber) {
      if (root.left) moveForward(root.left, nextNumber, currentArray);
      if (root.right) moveForward(root.right, nextNumber, currentArray);
    }
    currentArray.pop();
    return;
  }
  moveForward(root, 0, []);
  return result;
}
