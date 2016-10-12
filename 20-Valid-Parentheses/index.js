/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sArr = s.split('')
    const map = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    const stack = []
    for (let data of sArr) {
        if (map[data] !== undefined) {
            stack.push(data)
        } else if (map[stack.pop()] !== data) {
            return false
        }
    }
    return stack.length === 0 ? true : false
};
console.log(isValid("({}"))