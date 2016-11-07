/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function bSearchRange(arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (target > arr[mid]) {
            low = mid + 1
        } else if (target < arr[mid]) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return low - 1
}

function bSearch(arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (target > arr[mid]) {
            low = mid + 1
        } else if (target < arr[mid]) {
            high = mid - 1
        } else {
            return true
        }
    }
    return false
}

var searchMatrix = function(matrix, target) {
    const firstColArr = matrix.map(val => val[0])
    const row = bSearchRange(firstColArr, target)
    if (row === -1) {
        return false
    }
    return bSearch(matrix[row], target)
};

console.log(searchMatrix([[1]],0))