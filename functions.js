let log = function (message) {
    console.log(message)
};
log("In JavaScript functions are variables")

const log1 = msg => console.log(msg);
log1("In JavaScript functions are variables 12")

// Since functions are variables, we can add them to objects:
const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
}
obj.log(obj.message)
obj.log(obj.log)

// We can also add functions to arrays in JavaScript:

const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
]

// messages is array - [1] is index of function - (messages[0]) is the arguments passed to function
messages[1](messages[0])
messages[3](messages[2])

// 
// Functions can be sent to other functions as arguments, just like other variables:

const insideFn = logger =>
    logger("They can be sent to other functions as arguments");
insideFn(msg => console.log(msg))

// 
// They can also be returned from other functions, just like variables:

let createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!")
    }
}
const scream = createScream(message => console.log(message))

scream('scream invokes that returned function')

// Test
const question = [
    'higher-order functions; functions that either take or return other functions.',
    ans => console.log(ans.toUpperCase()),
]
question[1](question[0])

// 'higher-order functions

const higherOrder = (example) => {
    return msg => example(msg);
}
const jawab = higherOrder(msg => console.log(msg))
jawab('Its HO function!')