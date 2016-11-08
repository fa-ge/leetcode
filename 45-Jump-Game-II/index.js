/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    function getBestIndex(nums, start, end) {
        let bestIndex = start
        for (let i = start + 1, best = nums[start] + start; i <= end && i < nums.length; i++) {
            if (nums[i] + i >= best) {
                bestIndex = i
                best = nums[i] + i
            }
        }
        return bestIndex
    }

    if (nums.length === 1) {
        return 0
    }

    let res = 1
    let n = 0
    while (n + nums[n] < nums.length - 1) {
        n = getBestIndex(nums, n, n + nums[n])
        if (nums[n] === 0) {
            return -1
        }
        res++
    }

    return res
};

console.log(jump([2,3,1,1,1,4]))