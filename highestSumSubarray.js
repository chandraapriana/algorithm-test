const highestSumSubarray = (array, number) => {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i + number > array.length) break;
    let sum = 0;
    for (let j = i; j < i + number; j++) {
      sum += array[j];
    }
    tempArray.push(sum);
  }

  let highestValue = findHighestValue(tempArray);
  return highestValue;
};

const findHighestValue = (array) => {
  let highestValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (highestValue < array[i]) highestValue = array[i];
  }
  return highestValue;
};

module.exports = highestSumSubarray;
