/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sArr = s.split('')

    let left = 0
    let right = 1
    const len = sArr.length

    if (len <= 1) {
        return s
    }

    let hash = {
        [sArr[0]]: 0
    }
    let maxLenLeft =0
    let maxLenRight = 0
    while (right < len) {
        if (hash[sArr[right]] !== undefined) {
            if ((right - left) > (maxLenRight - maxLenLeft)) {
                maxLenLeft = left
                maxLenRight = right - 1
            }
            left = hash[sArr[right]] + 1
            hash = {
                [sArr[left]]: left
            }
        }
        hash[sArr[right]] = right
        right++
    }
    return s.substring(maxLenLeft, maxLenRight + 1)
};

console.log(lengthOfLongestSubstring('abcabcbb'))