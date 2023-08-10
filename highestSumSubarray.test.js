const highestSumSubarray = require("./highestSumSubarray.js");

test("highestSumSubarray should return the highest sum from subarray (1)", () => {
  const array = [100, 200, 300, 400];
  const number = 2;
  const highestValue = highestSumSubarray(array, number);
  const expectedValue = 700;
  expect(highestValue).toEqual(expectedValue);
});

test("highestSumSubarray should return the highest sum from subarray (2)", () => {
  const array = [1, 4, 2, 10, 23, 3, 1, 0, 20];
  const number = 4;
  const highestValue = highestSumSubarray(array, number);
  const expectedValue = 39;
  expect(highestValue).toEqual(expectedValue);
});

test("highestSumSubarray should return the highest sum from subarray (3)", () => {
  const array = [-3, 4, 0, -2, 6, -1];
  const number = 2;
  const highestValue = highestSumSubarray(array, number);
  const expectedValue = 5;
  expect(highestValue).toEqual(expectedValue);
});

test("highestSumSubarray should return 'Array is Empty' when array input is empty", () => {
  const array = [];
  const number = 2;
  const highestValue = highestSumSubarray(array, number);
  const expectedValue = "Array Is Empty";
  expect(highestValue).toEqual(expectedValue);
});

test("highestSumSubarray should return 'Number input should in integer' when number input is not number", () => {
  const array = [-3, 4, 0, -2, 6, -1];
  const number = "2";
  const highestValue = highestSumSubarray(array, number);
  const expectedValue = "Number input should in integer";
  expect(highestValue).toEqual(expectedValue);
});
