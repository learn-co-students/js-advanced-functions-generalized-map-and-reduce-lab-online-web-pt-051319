// Add your functions here

function map(arr, func) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    mapArr.push(result);
  }
  return mapArr;
}

function reduce(arr, func, startingPoint) {
  let val1 = startingPoint || arr.shift();
  for (let i = 0; i < arr.length; i++) {
    val1 = func(arr[i], val1);
  }
  return val1;
}
