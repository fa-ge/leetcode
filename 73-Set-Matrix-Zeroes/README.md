### 7\. Reverse Integer

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Have you thought about this?

Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### 方法（一）
一个再普通不过的方法，循环x除以10取整，知道x等于0。就是对看代码index.js，但是写出来效率只打败了16.61%的

### 方法（二）
这个方法是把数字转成字符串，然后再把字符串数组，反转数组再转成字符串。打败了72.9%.代码见index2.js