/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/**
 var addBinary = function(a, b) {
    const aInt = parseInt(a, 2)
    const bInt = parseInt(b, 2)
    return (aInt + bInt).toString(2)
};
 */

var addBinary = function(a, b) {
    let carry = 0
    let sum
    let res = []
    for (let i = a.length - 1, j = b.length - 1; a[i] || b[j] || carry; i--, j--) {
        sum = carry + +(a[i] || 0) + +(b[j] || 0)
        carry = Math.floor(sum / 2)
        res.unshift(sum % 2)
    }

    return res.join('')
};

console.log(addBinary('11', '1'))