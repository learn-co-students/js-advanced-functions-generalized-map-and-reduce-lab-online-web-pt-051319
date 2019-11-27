const map = (a, fn) => {
	return a.map(v => fn(v))
}

const reduce = (a, fn, i = 0) => {
	let j = a.find(v  => typeof v != "number") ? true : 0
	return a.reduce(fn, i || j)
}