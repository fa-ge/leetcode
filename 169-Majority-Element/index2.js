/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorCnt = 0
    let majorEle
    for (let num of nums) {
        if (majorCnt === 0) {
            majorEle = num
            majorCnt++
        } else if (num === majorEle) {
            majorCnt++
        } else {
            majorCnt--
        }
    }
    return majorEle
};

console.log(majorityElement([1,2,3,5,4,4,2,3,4,4,4,2,4]))