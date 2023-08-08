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
