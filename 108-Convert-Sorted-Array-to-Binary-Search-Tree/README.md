### 108\. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

### 题意
把一个有序递增的数组转换成平衡的二叉搜索树

### 方法（一）
因为是有序的数组，所以数组的中间的值就是树的跟节点，左边的值是树的左子树，右边的就是右子树。递归数组就好了