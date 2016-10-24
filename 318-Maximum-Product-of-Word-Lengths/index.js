/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const bitArr = words.map((value) => {
        let bit = 0
        for (let val of value) {
            bit |= 1 << (val.codePointAt() - 97)
        }
        return bit
    })

    let max = 0
    for (let i = 0, len = bitArr.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((bitArr[i] & bitArr[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }
    return max
};
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))