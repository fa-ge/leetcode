/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    return new RegExp(s.split('').join('.*?')).test(t)
};

console.log(isSubsequence('acb', 'ahbgdc'))