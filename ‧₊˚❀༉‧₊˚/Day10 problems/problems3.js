function removeNegatives(arr) {
    return arr.filter(num => num >= 0);
  }
  
  console.log(removeNegatives([1, -2, 3, -4, 5]));