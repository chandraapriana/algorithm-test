const sumEvenValueObject = (object) => {
  const keys = Object.keys(object);
  let value = 0;
  for (let i = 0; i < keys.length; i++) {
    const valueObject = object[keys[i]];
    if (typeof valueObject === "number") {
      if (valueObject % 2 === 0) {
        value += valueObject;
      }
    } else if (typeof valueObject === "object") {
      value += sumEvenValueObject(valueObject);
    }
  }
  return value;
};

module.exports = sumEvenValueObject;

console.log(
  sumEvenValueObject({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  })
);
