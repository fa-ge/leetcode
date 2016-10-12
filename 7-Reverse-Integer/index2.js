/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x)
    x = Math.abs(x)
    let res = sign * (x + '').split('').reverse().join('')
    if (res > (Math.pow(2, 31) - 1)) {
        res = 0
    } else if (res < -Math.pow(2, 31)) {
        res = 0
    }
    return res
};

console.log(reverse(12233))