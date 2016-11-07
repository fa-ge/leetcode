/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let res = ''
    for (let i = 0; i < 32; i+=4) {
        res = arr[(num >> i) & 0b1111] + res
    }
    return res.replace(/^0+/g, '') || '0'
};

console.log(toHex(1000))