// Write a function that accepts a positive number N
// The function should console log s step shape 
// with N levels using the # character. Make sure the 
// step has spaces on the right hand side!
// --- Examples 
//   steps(2)
//      '# '
//      '##'
//   steps(3)
//      '#  '
//      '## '
//      '###'


function steps(n) {
    for( let i = 1; i<= n; i++) {
            console.log('#'.repeat(i) + ' '.repeat(n -i));
    }
}


steps(2);
console.log('--------------------------------------------')
steps(3);
console.log('--------------------------------------------')
steps(4);

