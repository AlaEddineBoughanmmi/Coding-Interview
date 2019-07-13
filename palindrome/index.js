// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that form the
// same word if it is reversed. 
// --- Exampleds:
//  palindrome('eye') === true
//  palindrome('abcd') === false


function palindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
}

console.log(palindrome('eye'))
console.log(palindrome('abcd'))