// Add your functions here
function map(srcArray, func) {
    let output = [];
    srcArray.forEach(item => output.push(func(item)));
    return output;
}

function reduce(srcArray, func, startingPoint) {
    let output;
    func(1, 0) === 1 ? output = 0 : output = true;
    
    if (startingPoint) {
        output = startingPoint;
    }
    
    srcArray.forEach(function(item) {
        output = func(item, output);
    });
    return output;
}
