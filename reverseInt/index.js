// Given an Integer, return an integer that is the reverse
// ordering of numbers 
// --- Examples
//   reverseInt(12) === 21
//   reverseInt(300) === 3
//   reverseInt(-67) === -76
//   reverseInt(-80) === -8


function reverseInt(n) {
 let reversed = parseInt(n.toString().split('').reverse('').join(''));
 return reversed * Math.sign(n);
}

console.log(reverseInt(12))
console.log(reverseInt(300))
console.log(reverseInt(-67))
console.log(reverseInt(-80))
