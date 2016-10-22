/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const arr = []
    for (let i = 0; i < 32; i++) {
        arr.unshift(nums.reduce((pre, cur) => pre + (cur >> i & 1), 0) % 3)
    }
    return parseInt(arr.join(''), 2) | 0
};

console.log(singleNumber([-1,-1,-1,-2]))