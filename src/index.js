
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const sortedArr = [];
  
  if (!matrix) return sortedArr;
  
  matrix.forEach((arr, i) => {
    const length = arr.length;
    if (i % 2 === 0) {
      for (let j = 0; j < length; j++) {
        sortedArr.push(arr[j]);
      }
    } else {
      for (let j = length - 1; j >= 0; j--) {
        sortedArr.push(arr[j]);
      }
    }
  });
  
  return sortedArr;
}
