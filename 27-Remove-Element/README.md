### 27\. Remove Element


Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array *nums* = `[3,2,2,3]`, *val* = `3`

Your function should return length = 2, with the first two elements of *nums* being 2.

Hint:

1. Try two pointers.
2. Did you use the property of "the order of elements can be changed"?
3. What happens when the elements to remove are rare?

### 方法（一）
遍历删除元素，js没有java那样的迭代器可以在迭代中删除元素，不过可以倒着遍历数组