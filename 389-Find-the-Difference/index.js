/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const xorFun = (pre, cur) =>  (pre ^ cur.codePointAt(0))
    return String.fromCodePoint([].reduce.call(s, xorFun, 0) ^ [].reduce.call(t, xorFun, 0))
};

console.log(findTheDifference('abcd', 'abcde'))