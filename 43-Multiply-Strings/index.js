/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = []
    const num1RevArr = num1.split('').reverse()
    const num2RevArr = num2.split('').reverse()
    for (let i = 0, len1 = num1RevArr.length, mul, carry = 0; i < len1; i++) {
        for (let j = 0, len2 = num2RevArr.length; j < len2; j++) {
            mul = num1RevArr[i] * num2RevArr[j]
            res[i + j] = (res[i + j] || 0) + mul
            carry = Math.floor(res[i + j] / 10)
            res[i + j] %= 10
            res[i + j + 1] = (res[i + j + 1] || 0) + carry
        }
    }
    const resStr = res.reverse().join('').replace(/^0+/, '')
    return resStr === '' ? '0' : resStr
};

console.log(multiply('9999', '0'))