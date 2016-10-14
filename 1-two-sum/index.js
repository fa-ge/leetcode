
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 双指针扫描
 */

var twoSum = function(nums, target) {
    const numsBak = nums.slice(0)
    numsBak.sort((a, b) => a - b)

    const len = numsBak.length
    let left = 0
    let right = len - 1
    let tar = numsBak[left] + numsBak[right]

    while (tar !== target || left >= right) {
        tar > target ? right-- : left++
        tar = numsBak[left] + numsBak[right]
    }

    const index1 = nums.indexOf(numsBak[left])
    const index2 = nums.lastIndexOf(numsBak[right])

    return [Math.min(index1, index2), Math.max(index1, index2)]
};

var nums = [0,4,3,0], target = 0
console.log(twoSum(nums, target))