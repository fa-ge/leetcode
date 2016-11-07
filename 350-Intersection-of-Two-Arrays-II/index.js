/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {}
    const arr = []

    nums1.forEach(value => map[value] = map[value] === undefined ? 1 : ++map[value])
    nums2.forEach((value) => {
        if (map[value]) {
            map[value]--
            arr.push(value)
        }
    })

    return arr
};

console.log(intersect([1,2,2,4], [2,3,2,4]))