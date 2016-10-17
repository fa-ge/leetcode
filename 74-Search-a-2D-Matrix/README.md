### 74\. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an *m* x *n* matrix. This matrix has the following properties:

* Integers in each row are sorted from left to right.
* The first integer of each row is greater than the last integer of the previous row.

For example,

Consider the following matrix:

    [
      [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]

Given target = `3`, return `true`.

### 方法（一）
把二维数组转换成一维的再用二分法找,代码见index.js

### 方法（二）
先对第一列二分查找，找到target在那一行后再对那一行二分查找，代码见index2.js