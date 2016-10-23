### 405\. Convert a Number to Hexadecimal

Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, [two’s complement](https://en.wikipedia.org/wiki/Two%27s_complement) method is used.

Note:

1. All letters in hexadecimal (`a-f`) must be in lowercase.
2. The hexadecimal string must not contain extra leading `0`s. If the number is zero, it is represented by a single zero character `'0'`; otherwise, the first character in the hexadecimal string will not be the zero character.
3. The given number is guaranteed to fit within the range of a 32-bit signed integer.
4. You must not use *any* method provided by the library which converts/formats the number to hex directly.

Example 1:

    Input:
    26

    Output:
    "1a"

Example 2:

    Input:
    -1

    Output:
    "ffffffff"

### 题意
把一个数字转换成16进制的数
### 方法（一）
每右移动四位和0b1111做与运算得到的值换算成16进制