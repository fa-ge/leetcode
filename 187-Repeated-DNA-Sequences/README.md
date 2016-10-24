### 187\. Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,

    Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

    Return:
    ["AAAAACCCCC", "CCCCCAAAAA"].

### 题意
给你一个由A，C，G，T组成的字符串，找出连续出现两次以及以上的子串，子串的长度是10.
### 方法（一）
这道题太容易Memory Limit Exceeded。首先先说下我的方法，我把这里的A，C，G，T用二进制00，01，10，11来替代。然后遍历子串把出现过的长度位10对子串保存到set中。如果再次出现，那么说明重复了。一开始我没用set保存。我用了js的对象来保存。毕竟方便啊。没想到就Memory Limit Exceeded了。提交了好多次才找到错误，蓝瘦，香菇。