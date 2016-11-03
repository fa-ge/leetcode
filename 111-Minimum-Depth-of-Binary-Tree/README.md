### 111\. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

### 题意
求二叉树的最小深度

### 方法（一）
BFS，只要第一次碰到左右节点都没有的节点就算是找到了

### 方法（二）
DFS, 比BFS要差，空间复杂度虽然一样O(n)，BFS需要用一个队列,DFS递归需要栈。但在时间上BFS第一次碰到叶子结点就退出循环了，DFS却需要遍历所有节点。