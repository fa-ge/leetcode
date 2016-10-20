### 238\. Product of Array Except Self

Given an array of *n* integers where *n* \> 1, `nums`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Solve it without division and in O(*n*).

For example, given `[1,2,3,4]`, return `[24,12,8,6]`.

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

### 题意
求一个整型数组的中每个元素除自身外其他所有数的乘积。

### 方法（一）
很容易想到的方法是，把所有数相乘然后除以当前数就可以了。这里比较麻烦的是0的情况，所以我对0分情况讨论了。总共三种情况
1. 没有0
2. 有且只有一个0
3. 有两个0