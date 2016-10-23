/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0, len = nums.length; i <= len; i++) {
        nums.push(i)
    }
    return nums.reduce((pre, cur) => pre ^ cur)
};
console.log(missingNumber([0,1]))