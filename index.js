function map(array, f) {
  let output = [];
  array.forEach(item => output.push(f(item)));
  return output;
}

function reduce(array, f, startingPoint) {
  let output;
  if (f(1, 0) === 1) {
    output = 0;
  } else {
    output = true;
  }
  if (startingPoint) {
    output = startingPoint;
  }
  array.forEach(function(item) {
    output = f(item, output);
  });
  return output;
}
