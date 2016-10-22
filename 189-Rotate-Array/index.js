/**
 * Created by fage on 2016/10/22.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length
    k %= length
    nums.unshift(...nums.splice(length - k))
};

console.log(rotate([1,2,3,4,5,6,7],3))