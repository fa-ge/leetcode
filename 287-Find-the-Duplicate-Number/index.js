/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let oneSpeedPointer = 0
    let twoSpeedPointer = 0
    while (nums[twoSpeedPointer] !== undefined) {
        oneSpeedPointer = nums[oneSpeedPointer]
        twoSpeedPointer = nums[nums[twoSpeedPointer]]
        if (oneSpeedPointer === twoSpeedPointer) {
            oneSpeedPointer = 0
            break
        }
    }

    while (nums[oneSpeedPointer] !== nums[twoSpeedPointer]) {
        oneSpeedPointer = nums[oneSpeedPointer]
        twoSpeedPointer = nums[twoSpeedPointer]
    }
    return nums[oneSpeedPointer]
};

console.log(findDuplicate([1,3,5,4,6,3,5]))