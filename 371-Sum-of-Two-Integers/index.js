/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        let res = a ^ b
        b = (b & a) << 1
        a = res
    }
    return a
};

console.log(getSum(5, 6))