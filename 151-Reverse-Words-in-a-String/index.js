/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.trim().split(/ +/).reverse().join(' ')
};

console.log(reverseWords(""))