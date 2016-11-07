
function isVowels(ch) {
    return /^[aeiou]$/i.test(ch)
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    let res = s.split('')

    while (left < right) {
        if (isVowels(res[left]) && isVowels(res[right])) {
            [res[left], res[right]] = [res[right], res[left]]
            left++
            right--
        } else if (isVowels(res[left]) && !isVowels(res[right])) {
            right--
        } else if(!isVowels(res[left]) && isVowels(res[right])) {
            left++
        } else {
            left++
            right--
        }
    }
    return res.join('')
};


console.log(reverseVowels('aA'))