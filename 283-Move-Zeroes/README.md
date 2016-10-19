### 283\. Move Zeroes

  Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

  For example, given `nums = [0, 1, 0, 3, 12]`, after calling your function, `nums` should be `[1, 3, 12, 0, 0]`.

  Note:

  1. You must do this in-place without making a copy of the array.
  2. Minimize the total number of operations.
  

### 题意
把数组中的所有0移到最后

### 方法（一）
记录数组的长度，把数组中的0全部删掉，然后再往后补0。代码见index.js

### 方法（二）
双指针扫描，left=0，right=1
三种情况
1. nums[left]=0,nums[right]!=0,交换两个数
2. nums[left]=0,nums[right]=0,right++
3. 其他都right++ left++


