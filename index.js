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

// expect(reduce(sourceArray, function (e, memo) { return e + memo })).to.equal(6)
// expect(reduce(sourceArray, function (e, memo) { return e + memo }, startingPoint)).to.equal(106)
// expect(reduce(sourceArray, function (a, memo) { return !!a && !!memo })).to.be.true
// expect(reduce(sourceArray, function (a, memo) { return !!a && memo })).to.be.false
// expect(reduce(sourceArray, function (a, memo) { return a || !!memo })).to.equal(true)
// expect(reduce(sourceArray, function (a, memo) { return !!a && memo })).to.equal(false)
