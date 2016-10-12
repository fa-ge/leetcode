/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x)
    x = Math.abs(x)
    let ret = 0
    while (x !== 0) {
        ret = ret * 10 + x % 10
        x = Math.floor(x / 10)
    }
    let res = sign * ret
    if (res > (Math.pow(2, 31) - 1)) {
        res = 0
    } else if (res < -Math.pow(2, 31)) {
        res = 0
    }
    return res
};

console.log(reverse(1534236469))