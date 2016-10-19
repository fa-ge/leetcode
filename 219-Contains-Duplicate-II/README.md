1. ### 219\. Contains Duplicate II

  Given an array of integers and an integer *k*, find out whether there are two distinct indices *i* and *j* in the array such that nums[i] = nums[j]and the difference between *i* and *j* is at most *k*.
  
### 题意
给你一个整型数组nums和整数k，找出不同索引i，j使得nums[i] = nums[j]并且j-i<=k

### 方法（一）
比较简单，用hash表