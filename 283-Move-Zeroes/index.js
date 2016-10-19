/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const length = nums.length
    for (let i = length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
        }
    }
    nums.push(...new Array(length - nums.length).fill(0))
};
var arr = [0,2,1,5]
moveZeroes(arr)
console.log(arr)