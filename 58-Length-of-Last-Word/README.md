### 58\. Length of Last Word

Given a string *s* consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given *s* = `"Hello World"`,
return `5`.

### 方法（一）
从尾部遍历，当遇到空格的时候，如果此时遍历过的字符串的长度大于0，那么结束循环，如果等于0，继续遍历。

### 方法（二）
用trim方法去掉最后面的空格，然后再把字符串转成数组取出最后一个元素