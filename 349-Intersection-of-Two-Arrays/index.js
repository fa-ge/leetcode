/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = {}
    const set = new Set()

    nums1.forEach(value => map[value] = true)
    nums2.forEach(value => {
        if (map[value]) {
            set.add(value)
        }
    })

    return Array.from(set)
};

console.log(intersection([1,2,3], [2,3,4]))