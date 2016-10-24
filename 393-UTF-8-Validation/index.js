/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let cnt = 0
    for (let val of data) {
        if (cnt === 0) {
            if ((val >> 3) === 0b11110) {
                cnt = 3
            } else if ((val >> 4) === 0b1110) {
                cnt = 2
            } else if ((val >> 5) === 0b110) {
                cnt = 1
            } else if ((val >> 7) !== 0) {
                return false
            }
        } else {
            if ((val >> 6) !== 0b10) {
                return false
            }
            cnt--
        }
    }
    return cnt === 0
};

console.log(validUtf8([237]))