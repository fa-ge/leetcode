/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]))

        if (height[left] > height[right]) {
            right--
        } else if (height[left] < height[right]) {
            left++
        } else {
            left++
            right--
        }
    }
    return maxArea

};


console.log(maxArea([1,1]))