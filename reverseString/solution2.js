// Given a string, return a new string with the reversed 
// // order of characters 
// --- Examples 
//  reverse('me') === 'em';
//  reverse('user') === 'resu';
//  reverse('hello') === 'olleh';


function reverse(str) {
   let reversed = '';
 //  for(let i = str.length -1 ; i >= 0; i--) {
 //        reverse += str[i];
 // }
     for (let char of str) {
             reversed = char + reversed;
     }
        return reversed;
}


// --- tests
console.log(reverse('me'));
console.log(reverse('user'));
console.log(reverse('hello'));

