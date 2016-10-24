/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const axorb = nums.reduce((pre, cur) => pre ^ cur)
    const last1 = axorb ^ ((axorb - 1) & axorb)
    let a = 0
    let b = 0
    for (let num of nums){
        if ((last1 & num) === 0) {
            a ^= num
        } else {
            b ^= num
        }
    }
    return [a, b]
};

console.log(singleNumber([88, 2, 88, 3, 2, 5]))