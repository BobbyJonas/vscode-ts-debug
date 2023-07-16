/* eslint-disable no-param-reassign */

/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
} */

interface TreeLinkNode {
  val: number;
  left: TreeLinkNode | null;
  right: TreeLinkNode | null;
  next: TreeLinkNode | null;
}

type TreeLinkNodeType = TreeLinkNode | null;

function GetNext(pNode: TreeLinkNodeType): TreeLinkNodeType {
  if (!pNode) return null;

  if (pNode.right !== null) {
    let pRight: TreeLinkNodeType = pNode.right;
    while (pRight.left !== null) {
      pRight = pRight.left;
    }
    return pRight;
  }

  if (pNode.next !== null && pNode.next.left === pNode) {
    return pNode.next;
  }

  if (pNode.next !== null) {
    let pNext: TreeLinkNodeType = pNode.next;
    while (pNext.next !== null && pNext.next.right === pNext) {
      pNext = pNext.next;
    }
    return pNext.next;
  }
  return null;
}
