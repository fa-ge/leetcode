/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(str)
    num = Number.isNaN(num) ? 0 : num
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = -Math.pow(2, 31)
    if (num > INT_MAX) {
        num = INT_MAX
    } else if (num < INT_MIN) {
        num = INT_MIN
    }
    return num
};

console.log(myAtoi("2147483648"))