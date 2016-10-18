### 165\. Compare Version Numbers

Compare two version numbers *version1* and *version2*.
If *version1* \> *version2* return 1, if *version1* \< *version2* return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the `.` character.
The `.` character does not represent a decimal point and is used to separate number sequences.
For instance, `2.5` is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

    0.1 < 1.1 < 1.2 < 13.37
    
### 题意
比较两个版本号

### 方法（一）
先把版本转换成整型数组，然后逐个比较两个数组。在遍历的时候以下的情况事第一个版本较大，当前版本一中的数字大于0，版本二中的数字比一中的小或者是undi]efined.只有这一种情况。如果版本一遇到0或者undefined的同时，版本二也是0或者undefined,那么继续遍历。