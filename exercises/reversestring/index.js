// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//reduce Array helper
// .reduce((args1,args2)=>{},"")
// the logic is the same as the reverse2() function: iterate through the array
// and move the former element to the back

function reverse3(str) {
    debugger;
    // run node inspect index.jx
    // type in repl, and it enables us to audit the function line by line
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse3('abcd');

module.exports = reverse3;

// reverse() is the an Array method
// thus we need to turn the string into an array, and then join() it back as a string
// eventually we return to the result
// function reverse(str) {
//     return arr.split('').reverse().join('');
// }

// this is a stack-kind thought
// loop through the string, and add the element to the back
// function reverse2(str) {
//     let reverse = '';
//     for (let character of str) {
//         reverse = character + reverse;
//     }
//     return reverse;
// }
