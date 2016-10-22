### 137\. Single Number II

  Given an array of integers, every element appears *three* times except for one. Find that single one.

  Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### 题意
一个整型数组中，所有的元素都出现三次，除了一个元素只出现一次，找出这个元素

### 方法（一）
把所有数的二进制位对应相加
1110

1110

1110

1001

\_\_\_\_\_

4331 对每一位进行求和

1001 对每一位的和做%3运算，来消去所有重复3次的数
这里要注意的是js存储整型用了8个字节，但是能取到最大的数是Math.pow(2,53)-1;但是能参与位运算的只有32。记得最后要转成32位的数字

