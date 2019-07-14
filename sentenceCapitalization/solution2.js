// Write a fuction accepts a string . The function should
// capitalize the first letter of each word in the string then 
// return the capitalized string 
// --- Examples 
//   capitalize('a short sentence') ---> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A lazy Fox'
//   capitalzie('look, it is working!') --> 'Look, It Is Working'

function capitalize(str) { 
        let result = str[0].toUpperCase();
        for (let i = 1; i < str.length; i++) {
                if (str[i - 1] === ' ') {
                        result += str[i].toUpperCase();
                } else {
                        result += str[i];
                }
        }
        return result;
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));




