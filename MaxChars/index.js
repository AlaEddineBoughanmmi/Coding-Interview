// Given a string, retunr the character that is most 
// commonly used in the string 

// --- Examples 
//   maxChar('abcddddde') === 'd'
//   maxChar('hello 12233222') === '2'


function maxChar(str) {
   let chars = {} 
   let char = ''; 
   let num = 0;
  
   for ( let i of str) {
        chars[i] = chars[i] + 1 || 1;
   }
  // finding most used
  for (let [c, i] of Object.entries(chars)) {
        if ( i >= num ) {
                 char = c;
                 num = i;
        }
}
    return char;
}

console.log(maxChar('abcddddde'));
console.log(maxChar('hello 12233222'));
