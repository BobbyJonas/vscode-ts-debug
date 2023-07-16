class RandomListNode {
  label: number;
  next: RandomListNode | null;
  random: RandomListNode | null;
  constructor(x: number, next?: RandomListNode | null, random?: RandomListNode) {
    this.label = x;
    this.next = next ? next : null;
    this.random = random ? random : null;
  }
}

function Clone(pHead: RandomListNode) {
  let nodeListNew: RandomListNode[] = [];
  function scan(pHead: RandomListNode | null): RandomListNode | null {
    if (pHead) {
      let currentNewNode = new RandomListNode(pHead.label, scan(pHead.next));
      nodeListNew[pHead.label] = currentNewNode;
      return currentNewNode;
    } else return null;
  }
  let pHeadNew = scan(pHead);
  function addRandomNode(pHead: RandomListNode | null, pHeadNew: RandomListNode | null): void {
    if (pHead) {
      if (pHead.random) {
        (pHeadNew as RandomListNode).random = nodeListNew[pHead.random.label];
      }
      addRandomNode(pHead.next, (pHeadNew as RandomListNode).next);
    }
  }
  addRandomNode(pHead, pHeadNew);
  return pHeadNew;
}
