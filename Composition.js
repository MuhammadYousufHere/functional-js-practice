{ "Composition" }
// The compose function is a higher order function. It takes functions as arguments and returns a single value.

//=> The goal of composition is to “generate a higher order function by combining simpler functions.”

// Chaining together
// 

const template = 'hh:mm:ss tt';
const clockTime = template.replace('hh', '11').replace('mm', '47').replace('ss', '35').replace('tt', 'AM');
console.log(clockTime);
console.log(template);

//

// const compose = (...func) => (arg) => func.reduce((composed, f) => f(composed), arg)

// const both = compose(analogHours, appendAMPM)
// console.log(both(new Date()));
// console.log(both(new Date()));

