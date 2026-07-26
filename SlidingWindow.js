// The Sliding Window pattern maintains a window of elements and slides it across the
// array to find subarrays or substrings that satisfy certain conditions.
// It avoids recalculating overlapping parts of consecutive windows.

// Find the maximum sum of any contiguous subarray of size k.
// Input: nums = [2, 1, 5, 1, 3, 2], k = 3

// Output: 9

const slidingWindow = (nums, k) => {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + nums[i];
  }
  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};

console.log(slidingWindow([2, 1, 5, 1, 3, 2], 3));
