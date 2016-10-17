/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function bSearch(arr, low, high, target) {
    if (low > high) {
        return false
    }

    let mid = Math.floor((low + high) / 2)

    if (arr[mid] < target) {
       return  bSearch(arr, mid + 1, high, target)
    } else if (arr[mid] > target) {
        return  bSearch(arr, 0, mid - 1, target)
    }
    return true
}
var searchMatrix = function(matrix, target) {
    const arr = [].concat(...matrix)
    return bSearch(arr, 0, arr.length - 1, target)
};

console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 3))