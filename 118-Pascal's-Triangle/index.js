/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = []
    for (let i = 0, mid; i < numRows; i++) {
        mid = Math.floor(i / 2)
        for (let j = 0; j <= mid; j++) {
            if (j === 0) {
                res[i] = [1]
                res[i][i] = 1
            } else {
                res[i][j] = res[i][i - j] = res[i - 1][j - 1] + res[i - 1][j]
            }
        }
    }
    return res
};

console.log(generate(6))