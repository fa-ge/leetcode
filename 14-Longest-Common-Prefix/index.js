/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
       return ''
    }
    let res = ''
    for (let i = 0, len = strs[0].length, tmp; i < len; i++) {
        tmp = strs[0][i]
        for (let j = 1, length = strs.length; j < length; j++) {
            if (strs[j][i] !== tmp) {
                return res
            }
        }
        res += tmp
    }
    return res
};

console.log(longestCommonPrefix(['abc','ab','abd']))