/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
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
    return low
}
var searchInsert = function(nums, target) {
    return bSearchRange(nums, target)
};

console.log(searchInsert([1,3,5,6], 2))