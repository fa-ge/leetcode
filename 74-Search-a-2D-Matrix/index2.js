/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function bSearchRange(arr, low, high, target) {
    if (low > high) {
        return low === 0 ? low : high
    }

    let mid = Math.floor((low + high) / 2)

    if (target > arr[mid]) {
        if (target < arr[mid + 1]) {
            return mid
        } else {
            return bSearchRange(arr, mid + 1, high, target)
        }
    } else if (target < arr[mid]) {
        if (target > arr[mid - 1]) {
            return mid - 1
        } else {
            return bSearchRange(arr, 0, mid -1, target)
        }
    }
    return mid
}

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
    const firstColArr = matrix.map(val => val[0])
    const row = bSearchRange(firstColArr, 0, firstColArr.length - 1, target)
    return bSearch(matrix[row], 0, matrix[row].length - 1, target)
};

console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 16))