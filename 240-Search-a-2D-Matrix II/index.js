/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
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

    for (let i = 0, len = matrix.length; i < len; i++) {
        if (bSearch(matrix[i], target)) {
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