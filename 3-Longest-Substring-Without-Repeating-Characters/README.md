1. ### 3\. Longest Substring Without Repeating Characters

  Given a string, find the length of the longest substring without repeating characters.

  Examples:

  Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

  Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

  Given `"pwwkew"`, the answer is `"wke"`, with the length of 3\. Note that the answer must be a substring, `"pwke"` is a *subsequence* and not a substring.
  
### 方法（一）
在遍历字符串的时候，用left记录最长字长字符串的首字符位置，len记录长度。hash的key记录出现过的字符，value记录字符的位置。
有两种情况len的值可能会发生变化，一种是遍历的时候当前字符在hash中没找到，第二种时找到了但是hash的value要小于left。
其余情况改变left到合适的位置