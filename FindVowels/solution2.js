// Write a function that returns the number of vowels 
// used in a string, Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples 
// vowels('Hi There!') ---> 3
// vowels('Why do you ask?') ---> 4
// vowels('Why?') ---> 0

function vowels(str) {
        let count = 0;
        const checker = ['a', 'e', 'i', 'o', 'u'];

        for( let char of str) {
                if (checker.includes(char)) {
                        count++;
                }
        }
        return count;
}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'))
console.log(vowels('Why?'))
