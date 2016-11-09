### 392\. Is Subsequence

Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (\<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

Example 1:
s = `"abc"`, t = `"ahbgdc"`

Return `true`.

Example 2:
s = `"axc"`, t = `"ahbgdc"`

Return `false`.

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k \>= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

### 题意
给定一个字符串s和一个字符串t，检查s是否是t的子序列。

您可以假设在s和t中只有小写英文字母。 t可能是非常长（长度〜= 500,000）字符串，并且s是短字符串（<= 100）。

字符串的子序列是一个新字符串，它通过删除一些（可以是无）字符而不干扰剩余字符的相对位置从原始字符串形成。 （即，“ace”是“abcde”的子序列，而“aec”不是）。

实施例1：
s =“abc”，t =“ahbgdc”

返回true。

实施例2：
s =“axc”，t =“ahbgdc”

返回false。

跟进：
如果有很多输入S，比如S1，S2，...，Sk，其中k> = 1B，并且你想逐个检查T是否有它的子序列。 在这种情况下，您将如何更改代码？

### 方法（一）
懂一点正则的人都能非常快的写出来吧