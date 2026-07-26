// The Prefix Sum pattern involves preprocessing an array to create
// a new array where each element
// at index i represents the sum
// of all elements from the start up to i.

const prefixSum = (arr) => {
  let sumArray = [];
  let tempSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      sumArray.push(arr[0]);
    } else {
      tempSum = arr[i] + tempSum;
      sumArray.push(tempSum);
    }
  }

  return sumArray;
};

console.log(prefixSum([1, 2, 3, 4, 5, 6]));

//Exmaple problem

// Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3

// Output: 9

const Sample = (arr, x, y) => {
  let Sum = 0;
  if (x > y || x >= arr.length || y >= arr.length || x < 0 || y < 0) {
    retrun("Out of bounds");
  }
  for (let i = 0; i < arr.length; i++) {
    if (i <= y && i >= x) {
      Sum = Sum + arr[i];
    }
  }

  return Sum;
};

console.log(Sample([1, 2, 3, 4, 5, 6], 1, 3));
