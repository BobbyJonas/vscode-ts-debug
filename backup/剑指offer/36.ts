class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function FindFirstCommonNode(pHead1: ListNode, pHead2: ListNode): ListNode | null {
  let _pHead1: ListNode | null = pHead1;
  let _pHead2: ListNode | null = pHead2;
  while (_pHead1 != _pHead2) {
    _pHead1 = _pHead1 ? _pHead1.next : pHead2;
    _pHead2 = _pHead2 ? _pHead2.next : pHead1;
  }
  return _pHead1;
}
