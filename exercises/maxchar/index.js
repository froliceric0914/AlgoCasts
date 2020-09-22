// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//build an object with the key for the letter and value for the frequency

// for...of is for string/array
// for...in is for object(key/value pairs)
function maxChar(str) {
    let charLib = {};
    for (let e of str) {
        // if (!charLib[e]) {
        //     charLib[e] = 1;
        // } else {
        //     charLib[e]++;
        // }

        //elimiate the usage of the if statement
        charLib[e] = charLib[e] + 1 || 1;
    }
    // Object.values return to the array of values of the object
    // Array.reduce() is very useful to get the the only desired value
    const maxNum = Object.values(charLib).reduce((a, b) => Math.max(a, b));

    // Object.keys return to the array of keys of the object
    return Object.keys(charLib).find((key) => charLib[key] === maxNum);
}

module.exports = maxChar;
