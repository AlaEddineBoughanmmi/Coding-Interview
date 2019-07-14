// Write a fuction accepts a string . The function should
// capitalize the first letter of each word in the string then 
// return the capitalized string 
// --- Examples 
//   capitalize('a short sentence') ---> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A lazy Fox'
//   capitalzie('look, it is working!') --> 'Look, It Is Working'

function capitalize(str) { 
        return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1,)).join(' ');
}
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));




