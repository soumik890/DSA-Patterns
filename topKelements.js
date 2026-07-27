// Example: Input: nums = [3, 2, 1, 5, 6, 4], k = 2 Output: 5

const topK = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

console.log(topK([3, 2, 1, 5, 6, 4], 2));
