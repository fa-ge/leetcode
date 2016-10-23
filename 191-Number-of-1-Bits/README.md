### 191\. Number of 1 Bits

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the [Hamming weight](http://en.wikipedia.org/wiki/Hamming_weight)).

For example, the 32-bit integer ’11' has binary representation `00000000000000000000000000001011`, so the function should return 3.

### 题意
求一个32位无符号整数的位中1的个数

### 方法（一）
这道题最容易想到的方法是遍历32位，可行，简单，但是js没有无符号整数的概念，所以对最后一位要单独考虑，比较麻烦。第二种就是把它转成2进制的字符串，把所有的0替换成空字符串后剩下的就是1啦。第三种方法比较难理解,[链接](http://www.matrix67.com/blog/archives/264).