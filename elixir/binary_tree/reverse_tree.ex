# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec invert_tree(root :: TreeNode.t | nil) :: TreeNode.t | nil
  def invert_tree(nil), do: nil
  def invert_tree(%TreeNode{left: left, right: right, val: val} = root) do
      # Recursively invert left and right subtrees, then swap them
      %TreeNode{
          val: val,
          left: invert_tree(right),
          right: invert_tree(left)
      }
  end
end
