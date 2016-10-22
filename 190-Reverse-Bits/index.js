/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 31; i++) {
        res = res << 1 | (n >> i & 1)
    }
    return (n >> 31 & 1) ? (res * 2 + 1) : res * 2
};

console.log(reverseBits(1))