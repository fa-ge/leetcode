### 1\. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have *exactly* one solution.

Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

UPDATE (2016/2/13):
The return format had been changed to zero-based indices. Please read the above updated description carefully.

### 方法（一）
对数组排序，然后用指针分别指向排序好的数组的头部和尾部的值，将两个值相加，如果大于target就向左移动尾部指针，如果小于target就向右移动首部指针，等于则结束循环。当首部指针的index大于等于尾部指针的index的时候就没找到相应的位置，也结束循环。代码看index.js

### 方法（二）
这一种方法更简单了，但是有一个坑。原来是把数组复制一份到hash表中。其实我们就是要找target-nums[i]的值再hash表中能不能找到，这里要注意两点。一个就是不能nums[i]和hash表中找到的不能是同一个数，比如[3,4] target: 6;你要排除nums[i]是3，找到hash表中的也是3。第二个点是再创建hash表的时候，因为hash的key必须是唯一的，如果[3,3,4]这样的数组再hash表只能对应两个key。代码看index2.js

