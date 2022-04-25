// Data Transformations
// functions transform data from one type to another.
{ 'Array.map and Array.reduce.' }

// We can get a comma-delimited list of these and some other strings by using the Array.join function:


const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield",
    "The Oxford"

]
console.log(schools.join(", "))
// join is a built-in JavaScript array method that we can use to extract a delimited string from our array. The original array is still intact;

{
    `If we wanted to create a function that creates a new array of the schools that begin
with the letter “W”, we could use the Array.filter method:`}

const wSchools = schools.filter(school => school[0] === "W")
console.log(wSchools)

// Array.filter is a built -in JavaScript function that produces a new array from a source array.This function takes a predicate as its only argument predicate is a function that always returns a Boolean value: true or false.Array.filter invokes this predicate once for every item in the array.That item is passed to the predicate as an argument and the return value is used to decide if that item shall be added to the new array. In this case, Array.filter is checking every school to see if its name begins with a “W”.


// Cut

const cutSchool = (cut, list) => list.filter((school) => school !== cut);

console.log(cutSchool("Yorktown", schools).join(' * '));
console.log(schools.join('\n'));
// 

// 
{ 'Array.map' }


// 
const highSchools = schools.map(school => `${school} High School`)

console.log(highSchools.join('\n'));

//ALSO

// Here is an example of the map function returning an object for every
// school:

const highSchoolss = schools.map(school => ({ name: school }))
console.log(highSchoolss);


// change the school with the name of “Stratford” to “HB Woodlawn” without mutating the schools array:

let institutes = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Lee" },
    { name: "Wakefield" }
]

const editInst = (oldName, name, arr) => institutes.map(item => (item.name === oldName) ?
    ({ ...arr, name }) :
    item
)
console.log(editInst("Wakefield", "The Oxford", institutes));
console.table(institutes);