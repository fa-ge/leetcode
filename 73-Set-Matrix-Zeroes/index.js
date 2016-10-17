/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = matrix.length
    const col = matrix[0].length
    let cleanFirstRowFlag = false
    let cleanFirstColFlag = false

    for (let m = 0; m < row; m++) {
        if (matrix[m][0] === 0) {
            cleanFirstColFlag = true
            break
        }
    }

    for (let m = 0; m < col; m++) {
        if (matrix[0][m] === 0) {
            cleanFirstRowFlag = true
            break
        }
    }

    for (let m = 1; m < row; m++) {
        for (let n = 1; n < col; n++) {
            if (matrix[m][n] === 0) {
                matrix[0][n] = matrix[m][0] = 0
            }
        }
    }

    for (let m = 1; m < row; m++) {
        if (matrix[m][0] === 0) {
            for (let i = 0; i < col; i++) {
                matrix[m][i] = 0
            }
        }
    }
    for (let m = 1; m < col; m++) {
        if (matrix[0][m] === 0) {
            for (let i = 0; i < row; i++) {
                matrix[i][m] = 0
            }
        }
    }

    if (cleanFirstRowFlag) {
        for (let m = 0; m < col; m++) {
            matrix[0][m] = 0
        }
    }

    if (cleanFirstColFlag) {
        for (let m = 0; m < row; m++) {
            matrix[m][0] = 0
        }
    }
};
var matrix = [[0,1,1,0],[1,0,1,1],[1,1,1,1],[0,1,1,1]]
setZeroes(matrix)
console.log(matrix)