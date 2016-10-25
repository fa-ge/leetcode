/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}
    const cnt = Math.floor(nums.length / 2)

    if (cnt === 0) {
        return nums[0]
    }

    for (let i = 0, len = nums.length; i < len; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1
        } else if (++map[nums[i]] > cnt) {
            return nums[i]
        }
    }
};

console.log(majorityElement([1]))