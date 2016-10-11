
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 把数组中的元素放到hash表中
 */

var twoSum = function(nums, target) {
    const numsHash = {}
    for (let i = 0, len = nums.length, tar; i < len; i++) {
        tar = target - nums[i]
        if (numsHash[tar] !== undefined) {
            return [numsHash[tar], i]
        }
        numsHash[nums[i]] = i
    }
};

var nums = [3,2,4], target = 6
console.log(twoSum(nums, target))