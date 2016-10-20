/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = []
    nums.push(Infinity)
    for (let begin = 0, end = 1, len = nums.length; end < len; end++) {
        if (nums[end] - nums[end - 1] !== 1) {
            if (end - begin === 1) {
                res.push('' + nums[begin])
            } else {
                res.push(nums[begin] + '->' + nums[end - 1])
            }
            begin = end
        }
    }
    return res
};

console.log(summaryRanges([1,2,3,5,6,9,10]))