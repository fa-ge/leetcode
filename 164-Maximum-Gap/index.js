/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const numsLen = nums.length
    if (numsLen < 2) {
        return 0
    }

    const maxNum = Math.max(...nums)
    const minNum = Math.min(...nums)
    const bucketLen = Math.ceil((maxNum - minNum) / (numsLen - 1))
    if (bucketLen === 0) {
        return 0
    }

    const bucketCount = Math.ceil((maxNum - minNum + 1) / bucketLen)
    const bucket = Array.from(new Array(bucketCount)).map(() => [])
    for (let num of nums) {
        bucket[Math.floor((num - minNum) / bucketLen)].push(num)
    }

    const bucketFilter = bucket.filter(value => value.length !== 0)
    let maxGap = 0
    for (let i = 0; i < bucketFilter.length - 1; i++) {
        maxGap = Math.max(maxGap, (Math.min(...bucketFilter[i + 1]) || 0) - Math.max(...bucketFilter[i]))
    }

    return maxGap
};

console.log(maximumGap([1,3,7,8]))