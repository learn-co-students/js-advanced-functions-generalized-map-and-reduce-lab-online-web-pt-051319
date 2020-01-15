// Add your functions here
function map(src, func) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(func(src[i]))
    }
    return r
}

function reduce(src, func, startingPoint) {
    let value = startingPoint || src.shift()
    for (let i = 0; i < src.length; i++) {
        value = func(src[i], value)
    }
    return value
}