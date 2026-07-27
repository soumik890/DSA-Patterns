// Input: intervals = [[1,3], [2,6], [8,10], [15,18]]

// Output: [[1,6], [8,10], [15,18]]

const mergeIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1],
      );
    }
  }

  return result;
};

console.log(
  mergeIntervals([
    [15, 18],
    [1, 3],
    [2, 6],
    [8, 10],
  ]),
);
