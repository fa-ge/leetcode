/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const map = {}
    for (let i of s) {
        map[i] = map[i] ? map[i] + 1 : 1
    }

    const stack = []
    for (let i of s) {
        if (!stack.includes(i)) {
            let top = stack[stack.length - 1]
            while (top > i && map[top] > 0) {
                stack.pop()
                top = stack[stack.length - 1]
            }
            stack.push(i)
        }
        map[i]--
    }
    return stack.join('')
};

console.log(removeDuplicateLetters('cbacdcbc'))