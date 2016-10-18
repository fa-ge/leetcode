/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }
    let pos = -1
    for (let i = 0, j = 0, len = haystack.length; i < len; i++) {
        if (haystack[i] === needle[j]) {
            if (j++ === 0) {
                pos = i
            }
        } else {
            if (j !== 0) {
                i = pos
                j = 0
            }
        }
        if (j === needle.length) {
            return pos
        }
    }
    return -1
};

console.log(strStr('a', 'a'))