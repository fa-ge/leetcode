### 236\. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

            _______3______
           /              \
        ___5__          ___1__
       /      \        /      \
       6      _2       0       8
             /  \
             7   4

For example, the lowest common ancestor (LCA) of nodes `5` and `1` is `3`. Another example is LCA of nodes `5` and `4` is `5`, since a node can be a descendant of itself according to the LCA definition.

### 方法（一）
二种情况。
1. v和w有直系关系，就像5和6或者6和3
2. v和w没有直系关系
第二种情况一定分别在T节点的左右子树上，而且也仅有T节点的左右子树分别有这两个节点。这里用递归找左右子树中是否有这两个节点。如果左右子树中都有，那祖先节点就是当前节点，如果只有左或者只有右子树上找到节点，说明是第一种情况返回找到的节点就可以了。

