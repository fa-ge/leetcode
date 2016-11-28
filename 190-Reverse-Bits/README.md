### 190\. Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: [Reverse Integer](https://leetcode.com/problems/reverse-integer/)

### 题意
反转无符号整数的位

### 方法（一）
这道题如果你有c，c++，java这样的语言来写是很简单的一道题目，因为这些语言都有无符号整数的类型。但是js没有。所以说我当时写出来后数字大于Math.pow(2,31)后就会出错。因为js的整数是有符号的。首位是符号位。看到一些答案的方法转成二进制字符串后再反转补0.确实可以这么做。完全没有问题。不过我看到一个答案很机智，他循环右移了31位，最后一位特殊判断。
好吧。根本不机智。对一个有符号数做 >>> 0运算就成无符号数了