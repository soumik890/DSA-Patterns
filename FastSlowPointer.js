// The Fast & Slow Pointers pattern (also called Tortoise and Hare) uses two pointers moving at different speeds.
// When there is a cycle, the fast pointer will eventually meet the slow pointer.

// Example:
// Input: head = [3, 2, 0, -4], tail connects to node index 1
// Output: true

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (arr, pos) => {
  if (arr.length === 0) return null;

  const nodes = arr.map((val) => new ListNode(val));

  // Connect nodes
  for (let i = 0; i < arr.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  // Create cycle if pos != -1
  if (pos !== -1) {
    nodes[arr.length - 1].next = nodes[pos];
  }
  return nodes[0];
};

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
};

// Test 1: Has cycle
const head1 = createLinkedList([3, 2, 0, -4], 1);
console.log(hasCycle(head1)); // true

// Test 2: No cycle
const head2 = createLinkedList([3, 2, 0, -4], -1);
console.log(hasCycle(head2)); // false
