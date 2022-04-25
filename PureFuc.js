// Pure Functions

// A pure function is a function that returns a value that is computed based on its arguments. Pure functions take at least one argument and always return a value or
// another function. They do not cause side effects, set global variables, or change anything about application state. They treat their arguments as immutable data.

var Person = {
    name: "Farhan Ahmed",
    canRead: false,
    canWrite: false
};


// 
{ "selfEducate function is not impure" }
// function selfEducate() {
//     Person.canRead = true
//     Person.canWrite = true
//     return Person
// }
// selfEducate()
// console.log(Person)

// 
{ 'Also not pure function' }
// const selfEducate = (info) => {
//     info.canRead = true
//     info.canWrite = true
//     return info
// }
// console.log(selfEducate(Person))
// console.log(Person);

// 

{ 'Pure Function' }
const selfEducate = person =>
({
    ...person,
    canRead: true,
    canWrite: true
})
console.log(selfEducate(Person))
console.table(Person)