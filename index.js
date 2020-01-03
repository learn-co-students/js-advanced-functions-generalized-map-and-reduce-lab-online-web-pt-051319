// Add your functions here
function map(sourceArray, fcn) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(fcn(sourceArray[i]));
  }
  return newArr;
}

function reduce(src, func, startingPoint) {
  let value = startingPoint || src.shift();
  for (let i = 0; i < src.length; i++) {
    value = func(src[i], value);
  }
  return value;
}
