/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const length = nums.length
    let lastIndex = length - 1
    for (let i = length - 2; i >= 0; i--) {
        if (nums[i] + i >= lastIndex) {
            lastIndex = i
        }
    }
    return lastIndex === 0
};

console.log(canJump([3,2,1,0,5, 4]))