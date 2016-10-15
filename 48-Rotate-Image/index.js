/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  var rotate = function(matrix) {
//     const length = matrix.length
//     const res = []
//     for (let n = 0; n < length; n++) {
//         res[n] = []
//         for (let m = length - 1; m >= 0; m--) {
//             res[n].push(matrix[m][n])
//         }
//     }
//     for (let n = 0; n < length; n++) {
//         for (let m = 0; m < length; m++) {
//             matrix[n][m] = res[n][m]
//         }
//     }
// };
var rotate = function(matrix) {
    const length = matrix.length
    for (let n = 0, tmp; n < length - 1; n++) {
        for (let m = n; m < length; m++) {
            tmp = matrix[m][n]
            matrix[m][n] = matrix[n][m]
            matrix[n][m] = tmp
        }
    }
    for (let m = 0, tmp; m < length; m++) {
        for (let n = 0; n < length / 2; n++) {
            tmp = matrix[m][length - n - 1]
            matrix[m][length - n - 1] = matrix[m][n]
            matrix[m][n] = tmp
        }
    }
};

var data = [[1,2,5],[3,4,7],[2,6,5]]
rotate(data)
console.log(data)