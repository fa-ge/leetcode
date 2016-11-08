/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let res = ['', '', '']
    nums.forEach(value => {
        res[value] += value
    })
    res = res.join('').split('').map(value => +value)
    res.forEach((value, index) => {
        nums[index] = value
    })
};

console.log(sortColors([1,0]))