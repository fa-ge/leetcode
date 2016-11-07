/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    return s.split('').sort().join() === t.split('').sort().join()
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