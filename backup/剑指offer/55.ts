interface ListNode {
  val: number;
  next: ListNode | null | undefined;
}

function EntryNodeOfLoop(pHead: ListNode | undefined | null) {
  if (!pHead) return pHead;
  let rabbit: ListNode | undefined | null = pHead;
  let tortoise: ListNode | undefined | null = pHead;
  do {
    rabbit = rabbit?.next?.next;
    tortoise = tortoise?.next;
  } while (rabbit && rabbit !== tortoise);

  if (!rabbit) return null;

  let tortoise2: ListNode | undefined | null = pHead;
  while (tortoise !== tortoise2) {
    tortoise = tortoise?.next;
    tortoise2 = tortoise2?.next;
  }
  return tortoise;
}

const myListNodeCircle: ListNode = {
  val: 3,
  next: undefined,
};

myListNodeCircle.next = {
  val: 4,
  next: {
    val: 5,
    next: myListNodeCircle,
  },
};

const myListNode: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: myListNodeCircle,
  },
};

console.log(EntryNodeOfLoop(myListNode));
