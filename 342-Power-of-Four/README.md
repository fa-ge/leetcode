### 342\. Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?

### 题意
判断一个整数是不是4的幂
### 方法（一）
4的幂一定在从右往左数奇数位上是1，比如16的二进制是10000，在倒数第5位。先判断n是不是2的幂（231题），如果是说明该数符合000010000这样的格式。然后与上0x55555555(....01010101),如果不等于0，说明在奇数位上有1，那么就是4的幂啦