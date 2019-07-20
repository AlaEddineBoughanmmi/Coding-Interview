// Write a function that returns the number of vowels 
// used in a string, Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples 
// vowels('Hi There!') ---> 3
// vowels('Why do you ask?') ---> 4
// vowels('Why?') ---> 0

function vowels(str) {
        let found =  str.match(/[aeiou]/gi);
        return found ? found.length : 0;
}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'))
console.log(vowels('Why?'))
