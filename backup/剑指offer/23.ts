function VerifySquenceOfBST(sequence: number[]): boolean {
  if (!sequence) return false;
  if (sequence.length <= 0) return false;
  let resArray: number[] = [];
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
  function constructNode(sequence: number[]): TreeNode | undefined {
    let currentNode: TreeNode;
    let lowerSeq: number[] = [];
    let upperSeq: number[] = [];
    let len = sequence.length;
    for (let i = 0; i < len - 1; i++) {
      if (sequence[i] < sequence[len - 1]) lowerSeq.push(sequence[i]);
      if (sequence[i] > sequence[len - 1]) upperSeq.push(sequence[i]);
    }
    if (len - 1 >= 0) {
      currentNode = new TreeNode(
        sequence[len - 1],
        constructNode(lowerSeq),
        constructNode(upperSeq)
      );
      return currentNode;
    }
  }
  function treeRecursion(root: TreeNode | undefined): void {
    if (root) {
      if (root.left) treeRecursion(root.left);
      if (root.right) treeRecursion(root.right);
      resArray.push(root.val);
    }
  }
  let resTree = constructNode(sequence);
  treeRecursion(resTree);

  if (Array.prototype.toString.call(resArray) === Array.prototype.toString.call(sequence)) {
    return true;
  } else return false;
}

let example: number[] = [4, 8, 6, 12, 16, 14, 10];
console.log(VerifySquenceOfBST(example));
