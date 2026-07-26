// The Two Pointers pattern uses two pointers to traverse
// an array or list, typically from opposite ends or both moving in the same direction. It reduces time
// complexity from O(n^2) to O(n) for many problems.

// Example:
// Input: nums = [1, 2, 3, 4, 6], target = 6
// Output: [1, 3] (indices of 2 and 4)

const twoPointers = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] == target) {
      let val = [left, right];
      return val;
    }
    if (arr[left] + arr[right] < target) {
      left++;
    }

    if (arr[left] + arr[right] > target) {
      right--;
    }
  }
};

console.log(twoPointers([1, 2, 3, 4, 6], 6));
