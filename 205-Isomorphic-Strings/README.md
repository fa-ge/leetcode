### 205\. Isomorphic Strings

Given two strings *s* and *t*, determine if they are isomorphic.

Two strings are isomorphic if the characters in *s* can be replaced to get *t*.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given `"egg"`, `"add"`, return true.

Given `"foo"`, `"bar"`, return false.

Given `"paper"`, `"title"`, return true.

Note:
You may assume both *s* and *t* have the same length.

### 方法（一）
分别对s，t建立两个hash表，再遍历字符串的时候，分别从各自的hash表中找值，如果值相等，那么将值设为i，如果不相等，返回false。为什么要设置成i呢？i其实是对这个当前字符的标记。当两个字符的标记不同的时候也就意味着它们对不上号了。