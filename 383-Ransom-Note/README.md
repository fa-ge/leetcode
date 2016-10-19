### 383\. Ransom Note

 Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false. 

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

    canConstruct("a", "b") -> false
    canConstruct("aa", "ab") -> false
    canConstruct("aa", "aab") -> true
    
### 题意
从magazine中找ransomNote，如果ransomNote的每一个字符都能在magazine中找到，如果ransomNote中有两个a，那么magazine也至少需要两个啊，能找到的话返回true，否则返回false

### 方法（一）
用hash表，把magazine的每一个字符作为key放入hash中，value是这个key出现的次数。在遍历ransomNote的时候，当字符在hash表中找不到的时候，活着value是0的时候返回false