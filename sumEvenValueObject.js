const sumEvenValueObject = (object) => {
  if (typeof object !== "object") return "Input is not object";
  const keys = Object.keys(object);
  if (keys.length === 0) return "Object is empty";

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
