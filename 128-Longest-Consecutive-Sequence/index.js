/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const hash = {}
    nums.forEach((value) => hash[value] = true)
    let i = 0
    let j = 0
    let maxLen = 0
    for (let num of nums) {
        i = j = num
        while (hash[j + 1] || hash[i - 1]) {
            if (hash[j + 1]) {
                nums.splice(++j, 1)
            }
            if (hash[i - 1]) {
                nums.splice(--i, 1)
            }
        }
        maxLen = Math.max(maxLen, j - i + 1)
    }
    return maxLen
};

console.log(longestConsecutive([0]))
