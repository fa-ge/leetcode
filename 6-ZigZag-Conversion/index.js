/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// Memory Limit Exceeded
var convert = function(s, numRows) {
    const length = s.length
    let i = 0
    const resArr = Array.from(new Array(numRows)).map((val) => [])

    let col = 0
    while (i < length) {
        for (let n = 0; n < numRows; n++) {
            resArr[n][col] = s[i++]
        }
        for (let n = numRows - 2; n > 0; n--) {
            resArr[n][++col] = s[i++]
        }
        col++
    }
    return resArr.reduce((pre, cur) => pre + cur.join(''), '')
};

console.log(convert("twckwuyvbihajbmhmodminftgpdcbquupwflqfiunpuwtigfwjtgzzcfofjpydjnzqysvgmiyifrrlwpwpyvqadefmvfshsrxsltbxbziiqbvosufqpwsucyjyfbhauesgzvfdwnloojejdkzugsrksakzbrzxwudxpjaoyocpxhycrxwzrpllpwlsnkqlevjwejkfxmuwvsyopxpjmbuexfwksoywkhsqqevqtpoohpd", 4))