### 231\. Power of Two

Given an integer, write a function to determine if it is a power of two.

### 题意
判断一个整数是不是2的幂

### 方法（一）
32位的整数2的幂总共也就31(2^0-2^30)个，全部列出来都没关系。不过这里用啦其他的方法,根据如果n是2的幂那么n&(n-1)=0;