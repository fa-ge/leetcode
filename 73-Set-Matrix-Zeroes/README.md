### 73\. Set Matrix Zeroes

Given a *m* x *n* matrix, if an element is 0, set its entire row and column to 0\. Do it in place.


Follow up:

Did you use extra space?
A straight forward solution using O(*m**n*) space is probably a bad idea.
A simple improvement uses O(*m* + *n*) space, but still not the best solution.
Could you devise a constant space solution?

### 方法（一）
1. 先确定第一行和第一列是否需要清零
2. 扫描剩下的矩阵元素，如果遇到了0，就将对应的第一行和第一列上的元素赋值为0
3. 根据第一行和第一列的信息，已经可以讲剩下的矩阵元素赋值为结果所需的值了
4. 根据1中确定的状态，处理第一行和第一列。

### 方法（二）
这个方法比较有趣，应该是js的专利。js中0和-0是有区别的，虽然0 === -0但是1/0=Infinity，而1/-0=-Infinity,根据这个区别，我们只要把等于0的那一行列都赋值成-0就可以了。相当简单见代码index2.js