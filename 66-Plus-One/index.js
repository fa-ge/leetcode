/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1
    for (let i = digits.length - 1, sum; i >= 0; i--) {
        sum = carry + digits[i]
        carry = Math.floor(sum / 10)
        digits[i] = sum % 10
    }
    if (digits[0] === 0) {
        digits.unshift(1)
    }
    return digits
};

console.log(plusOne([9,9,9]))