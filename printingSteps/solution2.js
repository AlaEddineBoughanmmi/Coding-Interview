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
    for (let i = 0; i < n; i++) {
         let step = '';

         for (let j = 0; j < n; j++) {
            if (j <= i) {
                    step += '#';
            } else {
                    step += ' ';
            }
         }
         console.log(step)
     }
}


steps(2);
console.log('--------------------------------------------')
steps(3);
console.log('--------------------------------------------')
steps(4);

