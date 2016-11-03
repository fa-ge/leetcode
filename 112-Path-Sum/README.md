### 112\. Path Sum


Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and `sum = 22`,

                  5
                 / \
                4   8
               /   / \
              11  13  4
             /  \      \
            7    2      1

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

### 题意
从二叉树的根到叶子节点找到一条路的和为22.

### 方法（一）
DFS