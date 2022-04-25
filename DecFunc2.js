// Let’s consider an array of color names

let list = [
    { title: "Red" },
    { title: "Lawn" },
    { title: "Party Pink" }
]

// We could create a function that will add colors to that array using Array.push:

// extra
// let morelist = [
//     { title: "Marron" },
// ]
const addColor = function (title, colors) {
    colors.push({ title: title })
    return colors;
}


// (color name, where to add?)
const newList = addColor('Navy Blue', list)
console.log(newList);

// However, Array.push is not an immutable function.

// Advanced & New
// don't use curly brackets after arrow
const addColour = (title, list) => [...list, { title }];
console.log(addColour('Green', list));