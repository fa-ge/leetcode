 ### 118\. Pascal's Triangle

  Given *numRows*, generate the first *numRows* of Pascal's triangle.

  For example, given *numRows* = 5,
Return

      [
         [1],
        [1,1],
       [1,2,1],
      [1,3,3,1],
     [1,4,6,4,1]
    ]
    
### 方法（一）
每一个数组中，除了第一个和最后一个元素外，每一个数都是肩上两个数相加的和。数组的左边和右边是完全一样的，所以内循环只需要遍历n/2次就可以了