/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const length = nums.length

    if (length < 2) {
        return length
    }

    let i = 1
    while (i < nums.length) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }

    return nums.length
};

console.log(removeDuplicates([1,1,1]))