### 119\. Pascal's Triangle II


Given an index *k*, return the *k*th row of the Pascal's triangle.

For example, given *k* = 3,
Return `[1,3,3,1]`.

Note:
Could you optimize your algorithm to use only *O*(*k*) extra space?

### 题意
给你一个k，返回第k+1行的数组。空间复杂度是*O*(*k*)

### 方法（一）
这里给定了空间复杂度，这就要求我们只能用长度为k的数组。
1 0 0 0 0
1 1 0 0 0
1 2 1 0 0
1 3 3 1 0
1 4 6 4 1
从上面的排列中可以看出，假如此时我们数组中的元素是1 3 3 1，要计算下一行可以从后往前算，a[i]=a[i]+a[i-1]。这样就不会覆盖掉有用的元素了