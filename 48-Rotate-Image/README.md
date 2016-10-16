### 48\. Rotate Image

  You are given an *n* x *n* 2D matrix representing an image.

  Rotate the image by 90 degrees (clockwise).

  Follow up:
Could you do this in-place?

### 方法（一）
![rotateImage](https://github.com/fa-ge/leetcodeAlgorithms/blob/master/48-Rotate-Image/rotateImage.JPG)
旋转90度就是先沿对角线翻转再沿y轴翻转。题目一定要求do this in-place，否者就可以直接转换。代码见index.js的注释部分。经过两次翻转的代码实现是见index.js
注视部分代码主要是根据矩阵线性变换后的结果，所列出的公式。