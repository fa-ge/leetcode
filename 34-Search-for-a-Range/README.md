### 34\. Search for a Range

Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of *O*(log *n*).

If the target is not found in the array, return `[-1, -1]`.

For example,
Given `[5, 7, 7, 8, 8, 10]` and target value 8,
return `[3, 4]`.

### 方法（一）
挺简单的，二分搜索到target在数组中的位置后然后再向两边搜索直到不是target为止。第二次搜索也能用二分法。不过我省了