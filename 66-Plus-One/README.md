### 66\. Plus One

Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

### 大意
给你一个非负的数字数组，然后加1，这个数组中的数字是由高位在前，低位在后，和正常的数字顺序一样，比如[1,5,7]就代表157
### 方法（一）
很简单，注意如果首位加进位变0的话，要在头部插入1