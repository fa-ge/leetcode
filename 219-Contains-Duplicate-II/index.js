/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = i
        } else {
            if (i - hash[nums[i]] <= k) {
                return true
            }
            hash[nums[i]] = i
        }
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,4,5,2], 6))