// Higher-order functions are functions that can manipulate other functions. They can
// take functions in as arguments, or return functions, or both.

const invokeIf = (condition, funcTrue, funcFalse) => { (condition) ? funcTrue() : funcFalse(); }
const sayHi = () => {
    console.log('Hello Yousuf, welcome!');
}
const logIn = () => {
    console.log('Please login to continue.')
}


invokeIf(true, sayHi, logIn)
invokeIf(false, sayHi, logIn)