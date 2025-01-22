defmodule Solution do
  def find_max_average(nums, k) do
    initial_sum = Enum.take(nums, k) |> Enum.sum()
    do_find(List.to_tuple(nums), k, k, initial_sum, initial_sum)
  end

  defp do_find(n, k, _start, _prev_sum, _max_sum) when tuple_size(n) == 1, do: elem(n, 0) / k
  defp do_find(n, k, start, _prev_sum, max_sum) when start >= tuple_size(n), do: max_sum / k

  defp do_find(n, k, start, prev_sum, max_sum) do
    current_sum = prev_sum - elem(n, start - k) + elem(n, start)
    new_max_sum = max(current_sum, max_sum)

    do_find(n, k, start + 1, current_sum, new_max_sum)
  end
end
