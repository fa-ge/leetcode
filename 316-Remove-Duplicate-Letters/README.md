### 316\. Remove Duplicate Letters

Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example:

Given `"bcabc"`
Return `"abc"`

Given `"cbacdcbc"`
Return `"acdb"`

### 题意
给定一个仅包含小写字母的字符串，删除重复的字母，以便每个字母只出现一次。 您必须确保您的结果是所有可能结果中最小的词典顺序。

例：
给定“bcabc”
返回“abc”

给定“cbacdcbc”
返回“acdb”

### 方法（一）
首先对字符串出现的个数进行统计。

然后对字符串扫描，每遇到一个字符串，判断其是否在栈中，如果在则跳过。（计数 – 1）

如果不在栈中，和栈顶的元素判断，要是当前栈顶的元素比较大而且cnt不为0（也就是说之后还有这个元素），就把栈顶弹出。然后把当前的元素入栈。