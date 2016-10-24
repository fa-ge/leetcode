### 201\. Bitwise AND of Numbers Range

Given a range [m, n] where 0 \<= m \<= n \<= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.

### 题意
对一个范围内的所有整数做与运算
### 方法（一）
没想到什么好办法。网上看到有一个规律就是说，与运算的结果一定是第一个数和最后一个数最左边共同的部分。比如5-7 是 ...000101,...000111,左边共同部分是..000100，所以值是4.知道这个规律之后就号算了。对m，n两个数循环右移直到他们相等。