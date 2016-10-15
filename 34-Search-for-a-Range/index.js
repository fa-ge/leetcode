/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function bSearch(arr, low, high, target) {
    if (low > high) {
        return -1
    }
    let mid = Math.floor((high + low) / 2)
    if (arr[mid] > target) {
        return bSearch(arr, low, mid - 1, target)
    } else if (arr[mid] < target) {
        return bSearch(arr, mid + 1, high, target)
    }
    return mid
}
var searchRange = function(nums, target) {
    const position = bSearch(nums, 0, nums.length - 1, target)

    if (position === -1) {
        return [-1, -1]
    }

    let i = position - 1
    let j = position + 1
    while (nums[i] === target || nums[j] === target) {
        nums[i] === target && i--
        nums[j] === target && j++
    }
    return [i + 1, j - 1]
};

console.log(searchRange([2,2], 3))