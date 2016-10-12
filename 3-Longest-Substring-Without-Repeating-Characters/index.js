/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sArr = s.split('')
    let left = 0
    let maxLen = 0
    const hash = {}

    for (let right = 0, len = sArr.length, tmpHashVal; right < len; right++) {
        tmpHashVal = hash[sArr[right]]
        if (tmpHashVal === undefined || tmpHashVal < left) {
            maxLen = Math.max(maxLen, right - left + 1)
        } else {
            left = tmpHashVal + 1
        }
        hash[sArr[right]] = right
    }
    return maxLen
};

console.log(lengthOfLongestSubstring('abbca'))