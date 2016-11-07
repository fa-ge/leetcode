/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const sArr = new Array(26).fill('')
    const tArr = new Array(26).fill('')

    for (let i = 0; i < s.length; i++) {
        sArr[s[i].charCodeAt() - 97] += s[i]
        tArr[t[i].charCodeAt() - 97] += t[i]
    }

    return sArr.join() === tArr.join()
};

let s = ''
let n = 5000000
let str = 'abcdefghijklmnopqrstuvwxyz'
while (n--) {
    s += str[Math.floor(Math.random() * 26)]
}

let time1 = + new Date()
console.log(isAnagram(s, s))
console.log(+new Date - time1)