// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples 
//  matrix(2)
//      [[1, 2].
//       [4, 3]]
//  matrix(3)
//      [[1, 2, 3],
//       [8, 9, 4],
//       [7, 6, 5]]
//  matrix(4) 
//       [[1,  2,  3, 4],
//       [12, 13, 14, 5],
//       [11, 16, 15, 6],
//       [10,  9,  8, 7]]
//

function matrix(n) {
    let result = [];
    let counter = 1;
    let colStart = 0, colEnd = n -1, RowStart = 0, RowEnd = n - 1;
        for(let i = 0 ; i < n; i++) {
                result.push([]);
        }

    while( colStart <= colEnd && RowStart <= RowEnd) {
            for(let j = colStart ; j <= colEnd; j++) {
                    result[RowStart][j] = counter;
                    counter++;
            }
            RowStart++;
            for(let j = RowStart; j <= RowEnd; j++) {
                    result[j][colEnd] = counter;
                    counter++;
            }
            colEnd--;
            for(let j = colEnd; j >= colStart; j--) {
                    result[RowEnd][j] = counter;
                    counter++;
            }
            RowEnd--;
            for(let j = RowEnd ; j>= RowStart; j--) {
                    result[j][colStart] = counter;
                    counter++;
            }
            colStart++;
    }
        return result;
}

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));
