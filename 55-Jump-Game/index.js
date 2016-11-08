/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
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

    let n = 0
    while (n + nums[n] < nums.length - 1) {
        n = getBestIndex(nums, n, n + nums[n])
        if (nums[n] === 0) {
            return false
        }
    }

    return true
};

console.log(canJump([3,2,1,0,4]))