### 71\. Simplify Path

Given an absolute path for a file (Unix-style), simplify it.

For example,
path = `"/home/"`, =\> `"/home"`
path = `"/a/./b/../../c/"`, =\> `"/c"`

[click to show corner cases.](https://leetcode.com/problems/simplify-path/#)

Corner Cases:

* Did you consider the case where path = `"/../"`?
In this case, you should return `"/"`.
* Another corner case is the path might contain multiple slashes `'/'` together, such as `"/home//foo/"`.
In this case, you should ignore redundant slashes and return `"/home/foo"`.

### 题意
给你一个绝对路径，简化它。

### 方法（一）
把路径字符串分割成数组，四种情况
1. '', 不管
2. '..', 出栈
3. '.', 不管
4. 其他入栈
最后注意再开头加上'/'