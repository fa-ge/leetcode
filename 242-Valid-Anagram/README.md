### 242\. Valid Anagram

Given two strings *s* and *t*, write a function to determine if *t* is an anagram of *s*.

For example,
*s* = "anagram", *t* = "nagaram", return true.
*s* = "rat", *t* = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

### 方法（一）
因为元素只可能是26中情况，所以可以采用桶排序。时间复杂度是O(n).代码见index.js。在index2.js采用的是系统的sort方法。很奇怪的是在leetcode上竟然还是第二个方法跑的快。sort方法时间复杂度肯定不可能超过O(nlogn)的。所以我对当字符串很大的情况做里测试，确实还是桶排序跑的快。我就放心了。