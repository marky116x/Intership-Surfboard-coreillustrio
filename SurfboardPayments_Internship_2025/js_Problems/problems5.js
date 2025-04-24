function mergeAndSortArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
  

  console.log(mergeAndSortArrays([3, 1, 4], [2, 5]));


//   If a - b is negative (< 0):
// Keep a before b (order is correct).
// If a - b is positive (> 0):
// Swap a and b (order is incorrect).
// If a - b is zero (0):
// Keep the original order (they are equal).