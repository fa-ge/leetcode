/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowLen = matrix.length
    let colLen = matrix[0].length
    let row = rowLen - 1
    let col = 0
    while (row >= 0 && col < colLen) {
        if (target > matrix[row][col]) {
            col++
        } else if (target < matrix[row][col]) {
            row--
        } else {
            return true
        }
    }
    return false
};

console.log(searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5))