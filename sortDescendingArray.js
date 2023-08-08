const sortDescendingArray = (array) => {
  if (array.length < 1) return array;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

module.exports = sortDescendingArray;
