/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArr = path.split('/')
    const stack = []
    for (let i = 0, len = pathArr.length; i < len; i++) {
        if (pathArr[i] === '.' || pathArr[i] === '') {

        } else if(pathArr[i] === '..') {
            stack.pop()
        } else {
            stack.push(pathArr[i])
        }
    }
    return '/' + stack.join('/')
};

console.log(simplifyPath('/home/'))