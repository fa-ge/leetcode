/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    const sArr = s.trim().split(' ')
    return sArr[sArr.length - 1].length
};

console.log(lengthOfLastWord(" "))