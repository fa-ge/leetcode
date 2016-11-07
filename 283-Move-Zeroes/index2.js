/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = 1

    while (right < nums.length) {
        if (nums[left] == 0 && nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
        } else if(nums[left] == 0 && nums[right] === 0) {
            right++
        } else {
            left++
            right++
        }
    }
};

var arr = [0,2,1,5]
moveZeroes(arr)
console.log(arr)