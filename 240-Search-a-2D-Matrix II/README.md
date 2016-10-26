### 240\. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an *m* x *n* matrix. This matrix has the following properties:

* Integers in each row are sorted in ascending from left to right.
* Integers in each column are sorted in ascending from top to bottom.

For example,

Consider the following matrix:

    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]

Given target = `5`, return `true`.

Given target = `20`, return `false`.

### 题意
从一个二维数组中找一个数
* 每一行的整数从左向右递增
* 每一列的整数从上往下递增

### 方法（一）
因为每一行都已经排序，那么对每一行二分搜索。时间复杂度是O(mlogn)。其实随便想想也知道这肯定不是最佳算法。第二个条件都没用

### 方法（二）
从左下角那个数字开始，如果比这个数大就往右边搜索，如果比这个数小就往上边搜索，时间复杂度是O(m+n)