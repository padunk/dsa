defmodule Solution do
  @spec search_insert(nums :: [integer], target :: integer) :: integer
  def search_insert(nums, target) do
    find_index(List.to_tuple(nums), target, 0, length(nums))
  end

  defp find_index(n, t, _, _) when elem(n, tuple_size(n) - 1) < t, do: tuple_size(n)
  defp find_index(_, _, lo, hi) when lo >= hi, do: lo

  defp find_index(n, t, lo, hi) do
    mid = lo + div(hi - lo, 2)

    cond do
      elem(n, mid) == t -> mid
      elem(n, mid) < t -> find_index(n, t, mid + 1, hi)
      true -> find_index(n, t, lo, mid)
    end
  end
end
