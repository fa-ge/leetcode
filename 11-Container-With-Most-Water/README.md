### 11\. Container With Most Water

Given *n* non-negative integers *a1*, *a2*, ..., *an*, where each represents a point at coordinate (*i*, *ai*). *n* vertical lines are drawn such that the two endpoints of line *i* is at (*i*, *ai*) and (*i*, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

### 方法（一）
题意是x轴上在1,2,...,n点上有许多垂直的线段，长度依次是a1, a2, ..., an。找出两条线段能围成的最大面积。这是一个矩形，就像往其中灌水，能最多灌到高短的一边。公式是S(i,j) = min(ai, aj) * (j-i)
这里采用的算法是，双指针头尾扫描，如果a[left]<a[right],那么left++;为什么是这样？如果a[left]<a[right]的时候，对任何的i<right来说，组成的面积不可能比right来的大。所以left的所有情况可以排除了。