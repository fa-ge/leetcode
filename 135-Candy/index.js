/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const length = ratings.length
    const resArr = new Array(length)
    resArr[0] = 1

    for (let i = 0; i < length - 1; i++) {
        if (ratings[i] < ratings[i + 1]) {
            resArr[i + 1] = resArr[i] + 1
        } else {
            resArr[i + 1] = 1
        }
    }

    for (let i = length - 1; i > 0; i--) {
        if (ratings[i] < ratings[i - 1]) {
            resArr[i - 1] = Math.max(resArr[i] + 1, resArr[i - 1])
        }
    }

    return resArr.reduce((pre, cur) => pre + cur, 0)
};

console.log(candy([1,2,2,3,3,4]))