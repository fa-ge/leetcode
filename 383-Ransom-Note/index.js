/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {}
    for (let mag of magazine) {
        if (hash[mag]) {
            hash[mag]++
        } else {
            hash[mag] = 1
        }
    }
    for (let ran of ransomNote) {
        if (hash[ran]) {
            hash[ran]--
        } else {
            return false
        }
    }
    return true
};

console.log(canConstruct('a', 'b'))