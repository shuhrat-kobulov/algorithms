type ListNode = {
  val: number;
  next: ListNode | null;
};

function getDecimalValue(head: ListNode | null): number {
  let cur: ListNode | null = head;
  let dec: string = '';

  while (cur) {
    dec += cur.val;
    cur = cur.next;
  }

  return parseInt(dec, 2);
}
