/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = matrix.length
    const col = matrix[0].length

    for (let m = 0; m < row; m++) {
        for (let n = 0; n < col; n++) {
            if (matrix[m][n] === 0 && 1 / matrix[m][n] === Infinity) {
                for (let i = 0; i < row; i++) {
                    if (matrix[i][n] !== 0) {
                        matrix[i][n] = -0
                    }
                }
                for (let i = 0; i < col; i++) {
                    if (matrix[m][i] !== 0) {
                        matrix[m][i] = -0
                    }
                }
            }
        }
    }

};
var matrix = [[0,1,1,0],[1,0,1,1],[1,1,1,1],[0,1,1,1]]
setZeroes(matrix)
console.log(matrix)