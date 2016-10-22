### 287\. Find the Duplicate Number

Given an array *nums* containing *n* + 1 integers where each integer is between 1 and *n* (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:

1. You must not modify the array (assume the array is read only).
2. You must use only constant, *O*(1) extra space.
3. Your runtime complexity should be less than `O(n2)`.
4. There is only one duplicate number in the array, but it could be repeated more than once.

### 题意
给定一个数组* nums *包含* n * + 1个整数，其中每个整数在1和* n *（含）之间，证明至少有一个重复的数字必须存在。 假设只有一个重复的数字，找到重复的一个。

### 方法（一）
之前做项目有碰到过类似的需求，那时候用了一个正则解决啦。代码见index2.js.不过在n上万的时候正则处理的数独特别慢。所以超时啦！但是代码超级简单
### 方法（二）
和题目Linked List Cycle II想法是一模一样的。代码见index.js

