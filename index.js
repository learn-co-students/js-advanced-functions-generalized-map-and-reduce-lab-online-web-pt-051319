// Add your functions here
function map(src, cOdEbLoCk) {     //"code block"
    let newArray = []

    for (let i = 0; i < src.length; i++) {
        let theElement = src[i]
        newArray.push(cOdEbLoCk(theElement)) //takes result of code block and pushes to new array
    }
    return newArray
}

function reduce(src, cOdEbLoCk, starting){

    let newArray = starting ? starting : src[0]
    let i = starting ? 0 : 1

    for (; i < src.length; i++) {
        newArray = cOdEbLoCk(src[i], newArray)
    }

    return newArray;
}