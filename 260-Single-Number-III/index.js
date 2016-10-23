/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const axorb = nums.reduce((pre, cur) => pre ^ cur)
    const last1 = axorb ^ ((axorb - 1) & axorb)
    let a = 0
    let b = 0
    for (let i = 0, len = nums.length; i < len; i++){
        if ((last1 & nums[i]) === 0) {
            a ^= nums[i]
        } else {
            b ^= nums[i]
        }
    }
    return [a, b]
};

console.log(singleNumber([88, 2, 88, 3, 2, 5]))