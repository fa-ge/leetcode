1. ### 49\. Group Anagrams

  Given an array of strings, group anagrams together.

  For example, given: `["eat", "tea", "tan", "ate", "nat", "bat"]`, 
Return:

      [
      ["ate", "eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]

  Note: All inputs will be in lower-case.
  
### 方法（一）
要证明两个字符串是不是groupAnagrams，只要排序后是否相等就可以了。然后创建一个hash对象，key为排序后的字符串，value是返回结果数组的索引。

