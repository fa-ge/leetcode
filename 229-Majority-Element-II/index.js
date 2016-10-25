/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    let major1
    let major2
    let major1Cnt = 0
    let major2Cnt = 0
    for (let num  of nums) {
        if (num === major1) {
            major1Cnt++
        } else if (num === major2) {
            major2Cnt++
        } else if (major1Cnt === 0) {
            major1 = num
            major1Cnt++
        } else if (major2Cnt === 0) {
            major2 = num
            major2Cnt++
        } else {
            major1Cnt--
            major2Cnt--
        }
    }

    major1Cnt = 0
    major2Cnt = 0
    for (let num of nums) {
        if (num === major1) {
            major1Cnt++
        } else if (num === major2) {
            major2Cnt++
        }
    }

    const res = []
    const cnt = Math.floor(nums.length / 3)
    if (major1Cnt > cnt) {
        res.push(major1)
    }
    if (major2Cnt > cnt) {
        res.push(major2)
    }
    return res
};

console.log(majorityElement([1,2]))