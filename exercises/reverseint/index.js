// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//becasue there are both positive and negative int
//thus we introduce the Math.sign(n), for those negative values
function reverseInt(n) {
    let reverse = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reverse);
}

module.exports = reverseInt;
