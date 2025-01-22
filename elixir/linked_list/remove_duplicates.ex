# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

defmodule Solution do
  @spec delete_duplicates(head :: ListNode.t() | nil) :: ListNode.t() | nil
  def delete_duplicates(nil), do: nil

  def delete_duplicates(head) do
    do_delete_duplicates(head)
  end

  defp do_delete_duplicates(%ListNode{next: nil} = head), do: head

  defp do_delete_duplicates(%ListNode{val: val, next: %ListNode{val: next_val} = next} = head) do
    if val == next_val do
      # Skip the next node if it's a duplicate
      do_delete_duplicates(%ListNode{head | next: next.next})
    else
      # Keep current node and process the rest
      %ListNode{head | next: do_delete_duplicates(next)}
    end
  end
end
