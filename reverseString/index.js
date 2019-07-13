// Given a string, return a new string with the reversed 
// // order of characters 
// --- Examples 
//  reverse('me') === 'em';
//  reverse('user') === 'resu';
//  reverse('hello') === 'olleh';

function reverse(str) {
        return str.split('').reverse().join('');
}

// --- tests
console.log(reverse('me'));
console.log(reverse('user'));
console.log(reverse('hello'));
