/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const hashS = {}
    const hashT = {}
    const sArr = s.split('')
    const tArr = t.split('')

    for (let i = 0, len = sArr.length; i < len; i++) {
        if (hashS[sArr[i]] !== hashT[tArr[i]]) {
            return false
        }

        hashS[sArr[i]] = i
        hashT[tArr[i]] = i
    }
    return true
};

console.log(isIsomorphic('aba', 'baa'))