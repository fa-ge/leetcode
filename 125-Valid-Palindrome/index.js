/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let flag = true
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (!s[left].match(/[a-zA-Z0-9]/)) {
            left++
            continue
        }
        if (!s[right].match(/[a-zA-Z0-9]/)) {
            right--
            continue
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            flag = false
            break
        } else {
            right--
            left++
        }
    }
    return flag
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))