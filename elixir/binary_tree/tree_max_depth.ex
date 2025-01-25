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
  @spec max_depth(root :: TreeNode.t() | nil) :: integer
  def max_depth(nil), do: 0

  def max_depth(root) do
    check_depth(root)
  end

  defp check_depth(%TreeNode{left: left, right: right}) do
    dl = check_depth(left)
    dr = check_depth(right)

    max(dl, dr) + 1
  end
end
