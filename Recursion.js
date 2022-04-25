// Recursion is a technique that involves creating functions that recall themselves. Often when faced with a challenge that involves a loop, a recursive function can be used instead.

{ 'Task of counting down from 10.' }

const countDown = (value, callbackFunction) => {
    callbackFunction(value)
    return (value > 0) ? countDown(value - 1, callbackFunction) : value
}
// countdown expects a number and a function as arguments.
// When countdown is invoked, the callback is invoked,
countDown(6, value => console.log(value))
console.log('')

// WE COULD MAKE COUNTER OUT OF THIS

const counter = (value, callbackFunction, delay = 1000) => {
    callbackFunction(value)
    return (value > 0) ? setTimeout(() => counter(value - 1, callbackFunction), delay) : value
}

// counter(2, value => console.log(value))

//WE COULD AlSO retrieve a nested value:

const bioData = {
    type: 'Human',
    data: {
        gender: 'Male',
        info: {
            id: 63,
            fullname: {
                first: 'Muhammad',
                last: 'Yousuf'
            },
            age: 24,
            address: 'Block F House No. 299, Sachal Goth, Karachi, Pakistan.'
        }
    }
};

const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".")
    return (remaining.length) ?
        deepPick(remaining.join("."), object[first]) :
        object[first]
}
console.log(deepPick("data.info.fullname", bioData))
console.log(deepPick("data.info.address", bioData))
console.log(deepPick("data.info.id", bioData))