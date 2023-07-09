type ListNode = {
  val: number;
  next: ListNode;
};

class Solution {
  head: ListNode | null;

  constructor(head: ListNode | null) {
    this.head = head;
  }

  getRandom(): number {
    let current: ListNode | null = this.head;
    let count: number = 0;
    let result: number = 0;

    while (current) {
      count++;

      if (Math.random() < 1 / count) {
        result = current.val;
      }

      current = current.next;
    }

    return result;
  }
}
