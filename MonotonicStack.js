// Next Greater Element: For each element in an array, find the next greater element. Output -1 if none exists.

// Example:
// Input: nums = [2, 1, 2, 4, 3]

// Output: [4, 2, 4, -1, -1]

function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  // Traverse from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    // Remove all smaller or equal elements
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    // Top of stack is the next greater element
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }

    // Push current element
    stack.push(nums[i]);
  }

  return result;
}
