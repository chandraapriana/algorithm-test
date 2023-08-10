const sumEvenValueObject = require("./sumEvenValueObject.js");

test("sumEvenValueObject should return the sum of even number value from object (1)", () => {
  const object = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  const highestValue = sumEvenValueObject(object);
  const expectedValue = 6;
  expect(highestValue).toEqual(expectedValue);
});

test("sumEvenValueObject should return the sum of even number value from object (2)", () => {
  const object = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };

  const highestValue = sumEvenValueObject(object);
  const expectedValue = 12;
  expect(highestValue).toEqual(expectedValue);
});

test("sumEvenValueObject should return 'Input is not object' when the input is not an object", () => {
  const object = "test";

  const highestValue = sumEvenValueObject(object);
  const expectedValue = "Input is not object";
  expect(highestValue).toEqual(expectedValue);
});

test("sumEvenValueObject should return 'Object is empty' when the input is empty object", () => {
  const object = {};

  const highestValue = sumEvenValueObject(object);
  const expectedValue = "Object is empty";
  expect(highestValue).toEqual(expectedValue);
});
