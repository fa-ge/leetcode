### 136\. Single Number

Given an array of integers, every element appears *twice* except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### 题意
一个整型数组中，所有的元素都出现两次，除了一个元素只出现一次，找出这个元素

### 方法（一）
根据位运算中的异或运算符的一个性质  
a^b^b=a