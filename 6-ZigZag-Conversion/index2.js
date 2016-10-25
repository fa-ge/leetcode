/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const resArr = new Array(numRows).fill('')
    const loop = numRows * 2 - 2

    if(loop === 0 || s.length <= numRows) {
        return s
    }

    for (let i = 0, len = s.length, line = 0; i < len; i++) {
        line = i % loop
        line = (line > numRows - 1) ? (loop - line) : line
        resArr[line] += s[i]
    }
    return resArr.join('')
};

console.log(convert("PAYPALISHIRING", 3))