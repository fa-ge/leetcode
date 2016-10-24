### 397\. Integer Replacement

Given a positive integer *n* and you can do operations as follow:

1. If *n* is even, replace *n* with `*n*/2`.
2. If *n* is odd, you can replace *n* with either `*n* + 1` or `*n* - 1`.

What is the minimum number of replacements needed for *n* to become 1?

### 题意
给你一个整数n，如果这个整数是偶数，那么可以除以2，如果整数是奇数，那么可以加一或者减一。这样最快多少次后可以变成1

### 方法（一）
从一个数的二进制比如7，...000111去看，要让它变成1，就是要减少1的个数。如8，...0001000,要让他变1就是让他的1右移。归根结底我们就是要减少1的个数和右移1.右移1就是除以2，减少1的个数可以是加1也可以是减去1。看谁减少1的个数多。当末尾有连续两个1以及以上的时候，加1合算。只有末尾一个1的时候减去1更合算。但这个情况要对3特殊考虑。