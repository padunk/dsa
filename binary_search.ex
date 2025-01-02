defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: integer
  def search(nums, target) do
    lo = 0
    hi = length(nums)
    find(List.to_tuple(nums), target, lo, hi)
  end

  defp find(_nums, _target, lo, hi) when lo >= hi, do: -1

  defp find(nums, target, lo, hi) do
    m = (lo + (hi - lo) / 2) |> floor()
    v = elem(nums, m)

    cond do
      v == target -> m
      v < target -> find(nums, target, m + 1, hi)
      true -> find(nums, target, lo, m)
    end
  end
end
