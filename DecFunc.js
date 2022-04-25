// To understand how immutability work:,

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}
const rateColor = (color, rating) => {
    color.rating = rating
    return color
}
// console.log(rateColor(color_lawn, 9))
//original rating is has been modified
// console.log(color_lawn.rating)
// 
//Setting the color’s
// rating like this is bad because it changes or mutates the original color object.

// 

// Do this way
// Object.assign() - a copy machine -- it takes a blank object,  copies the color to that object, and overwrites the rating on the copy.
const rateColor1 = (color, rating) => {
    return Object.assign({}, color, { rating: rating })
}
console.log(rateColor1(color_lawn, 5).rating) // 5
console.log(color_lawn.rating)

// OR -(Advanced)
// uses the spread operator to copy the color into a new object and then overwrite its rating:

// 
console.log('')
const rateColor2 = (color, rating) => ({
    ...color,
    rating
})
console.log(rateColor2(color_lawn, 10).rating)
