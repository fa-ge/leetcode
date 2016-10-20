/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const firstZeroIndex = nums.indexOf(0)
    const lastZeroIndex = nums.lastIndexOf(0)
    let product = 0
    if (firstZeroIndex !== -1 && lastZeroIndex !== -1 && firstZeroIndex !== lastZeroIndex) {
        return nums.fill(0)
    }
    if (firstZeroIndex === -1 && lastZeroIndex === -1) {
        product = nums.reduce((pre, cur) => pre * cur)
        return nums.map(val => product/val)
    }
    if (firstZeroIndex !== -1 && lastZeroIndex !== -1 && firstZeroIndex === lastZeroIndex) {
        product = nums.reduce((pre, cur) => {
            return cur === 0 ? pre : pre * cur
        }, 1)
        nums[firstZeroIndex] = product
        return nums.fill(0, 0 , firstZeroIndex).fill(0, firstZeroIndex + 1, nums.length)
    }
};

console.log(productExceptSelf([0,1]))