type ListNode = {
  val: number;
  next: ListNode;
};

function mergeNodes(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;

  while (current && current.next) {
    if (current.next.val === 0 && current.next.next) {
      current = current.next;
    } else {
      current.val += current.next.val;
      current.next = current.next.next;
    }
  }

  return head;
}
