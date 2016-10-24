### 318\. Maximum Product of Word Lengths

Given a string array `words`, find the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Given `["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]`
Return `16`
The two words can be `"abcw", "xtfn"`.

Example 2:

Given `["a", "ab", "abc", "d", "cd", "bcd", "abcd"]`
Return `4`
The two words can be `"ab", "cd"`.

Example 3:

Given `["a", "aa", "aaa", "aaaa"]`
Return `0`
No such pair of words.

### 题意
给你一个小写的字符串数组，求出这个数组中两个字符串长度乘积最大的值。并且这两个字符串不能有公共字符。

### 方法（一）
想到了就很简单。因为都是小写字母。所以所有的字符也就26个。可以用32位来表示。a如果表示的是第一位（最低位），那么z表示第26位。abcd字符串表示..0001111.要判断两个字符串有没有共同字符串，则只要这两个数做与运算就可以了。