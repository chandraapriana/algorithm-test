const sortDescendingArray = require("./sortDescendingArray.js");

test("sortDescendingArray should sort the array in descending order even duplicate values", () => {
  const unsortedArray = [1, 2, 4, 3, 5, 3, 2, 1];
  const sortedArray = sortDescendingArray(unsortedArray);
  const expectedArray = [5, 4, 3, 3, 2, 2, 1, 1];
  expect(sortedArray).toEqual(expectedArray);
});

test("sortDescendingArray should return the array if empty", () => {
  const unsortedArray = [];
  const sortedArray = sortDescendingArray(unsortedArray);
  const expectedArray = [];
  expect(sortedArray).toEqual(expectedArray);
});

test("sortDescendingArray should sort an array with a single element", () => {
  const singleElementArray = [5];
  const sortedArray = sortDescendingArray(singleElementArray);
  expect(sortedArray).toEqual([5]);
});

test("sortDescendingArray should sort the array in descending order", () => {
  const unsortedArray = [3, 1, 4, 2, 5];
  const sortedArray = sortDescendingArray(unsortedArray);
  const expectedArray = [5, 4, 3, 2, 1];
  expect(sortedArray).toEqual(expectedArray);
});

test("sortDescendingArray should handle a large array", () => {
  const largeArray = Array.from({ length: 10000 }, () => Math.random());
  const sortedArray = sortDescendingArray(largeArray);
  expect(sortedArray).toEqual(largeArray.slice().sort((a, b) => b - a));
});
