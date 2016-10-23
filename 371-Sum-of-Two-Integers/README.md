### 371\. Sum of Two Integers

Calculate the sum of two integers *a* and *b*, but you are not allowed to use the operator `+` and `-`.

Example:
Given *a* = 1 and *b* = 2, return 3.

### 题意
不用+，-符号算两个整数的加法

### 方法（一）
可以通过异或运算和与运算分别获得相加的值和进位。a，b两个整数相加，a&b<<1,其实就是获得每一位上的进位并且左移一位。