### 222\. Count Complete Tree Nodes


Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from [Wikipedia](http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees):
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

### 题意
求完全二叉树的节点个数

### 方法（一）
如果当前子树的“极左节点”（从根节点出发一路向左）与“极右节点”（从根节点出发一路向右）的高度h相同，则当前子树为满二叉树，返回2^h - 1

否则，递归计算左子树与右子树的节点个数。