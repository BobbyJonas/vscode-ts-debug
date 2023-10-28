// ? 2. 两数相加

class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null;
  const res: ListNode = {
    val: Infinity,
    next: null,
  };
  let nextValue = 0;
  let current = res;
  let currentL1 = l1;
  let currentL2 = l2;
  do {
    let newValue = (currentL1?.val || 0) + (currentL2?.val || 0) + nextValue;
    nextValue = Math.floor(newValue / 10);
    newValue %= 10;
    current.next = {
      val: newValue,
      next: null,
    };
    current = current.next;
    currentL1 = currentL1?.next || null;
    currentL2 = currentL2?.next || null;
  } while (currentL1 || currentL2 || nextValue > 0);
  return res.next;
}
