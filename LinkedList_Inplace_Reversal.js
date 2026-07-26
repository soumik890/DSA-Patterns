// Reverse Linked List II: Reverse the nodes of a linked list from position m to n.

// Example:
// Input: head = [1, 2, 3, 4, 5], m = 2, n = 4

// Output: [1, 4, 3, 2, 5]

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseBetween = (head, left, right) => {
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;

  // Step 1: Reach the node before 'left'
  let prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // First node of the sublist
  let curr = prev.next;

  // Step 2: Repeatedly move the next node to the front
  for (let i = 0; i < right - left; i++) {
    // Node that we want to move
    let nodeToMove = curr.next;

    // Remove nodeToMove from its current position
    curr.next = nodeToMove.next;

    // Insert nodeToMove immediately after prev
    nodeToMove.next = prev.next;
    prev.next = nodeToMove;
  }

  return dummy.next;
};

// ---------- Helpers ----------

function buildList(arr) {
  const dummy = new ListNode(0);
  let tail = dummy;

  for (const num of arr) {
    tail.next = new ListNode(num);
    tail = tail.next;
  }

  return dummy.next;
}

function printList(head) {
  const result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result.join(" -> "));
}

// ---------- Test ----------

let head = buildList([1, 2, 3, 4, 5]);

printList(head);

head = reverseBetween(head, 2, 4);

printList(head);
