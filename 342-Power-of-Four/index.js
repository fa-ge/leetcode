/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num > 0 && ((num & (num - 1)) === 0) && ((num & 0x55555555) !== 0)) {
        return true
    }
    return false
};

console.log(isPowerOfFour(16777216))