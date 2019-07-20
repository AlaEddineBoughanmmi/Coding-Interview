// Write a function that accepts a positive number N
// The function should console log a pyramid shape
// with N levels using the # character. Make sure the 
// pyramid has spaces on both the left *and* the right hand sides
// --- Examples 
//   pyramid(1)
//      '#'
//   pyramid(2)
//      ' # '
//      '###'
//   pyramid(3)
//      '  #  '
//      ' ### '
//      '#####'


function pyramid(n) {
    for( let i = 1; i<= n; i++) {
            console.log(' '.repeat(n-i)+'#'.repeat(2*i -1) + ' '.repeat(n -i));
    }
}


pyramid(2);
console.log('--------------------------------------------')
pyramid(3);
console.log('--------------------------------------------')
pyramid(4);

