/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  var rotate = function(matrix) {
//         const length = matrix.length
//         const arr = []
//         const len = length - 1
//         for (let m = 0; m < length; m++) {
//             arr[m] = []
//             for (let n = 0; n < length; n++) {
//                 arr[m][n] = matrix[len-n][m]
//             }
//         }
// };
var rotate = function(matrix) {
    const length = matrix.length
    for (let n = 0; n < length - 1; n++) {
        for (let m = n; m < length; m++) {
            [matrix[m][n], matrix[n][m]] = [matrix[n][m], matrix[m][n]]
        }
    }
    for (let m = 0; m < length; m++) {
        for (let n = 0; n < length / 2; n++) {
            [matrix[m][length - n - 1], matrix[m][n]] = [matrix[m][n], matrix[m][length - n - 1]]
        }
    }
};

var data = [[1,3,6],[7,9,5],[8,4,2]]
rotate(data)
console.log(data)