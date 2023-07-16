interface ListNode {
  val: number;
  next: ListNode | null | undefined;
}

function deleteDuplication(pHead: ListNode): ListNode | null {
  if (!pHead) return pHead;
  const newPHead = {
    val: NaN,
    next: pHead,
  };
  let current: ListNode | undefined | null = newPHead;
  while (current) {
    let nextNode: ListNode | null | undefined = current.next;
    do {
      if (nextNode && nextNode?.val === nextNode?.next?.val) {
        while (nextNode && nextNode?.val === nextNode?.next?.val) {
          nextNode = nextNode?.next;
        }
        nextNode = nextNode?.next;
        current.next = nextNode;
      }
    } while (current?.next && current?.next?.val === current?.next?.next?.val);
    current = current?.next;
  }
  return newPHead?.next;
}
