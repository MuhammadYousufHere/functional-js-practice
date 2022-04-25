// replacing all of the spaces in a string with hyphens,

let string = "Functional programming is a part of a larger programming paradigm";
let toURlFriendly = '';

// OLD
for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        toURlFriendly += "-";
    } else {
        toURlFriendly += string[i];
    }
}
console.log(toURlFriendly);

// NEW

const URlFriendly = string.replace(/ /g, '-')
console.log(URlFriendly);
