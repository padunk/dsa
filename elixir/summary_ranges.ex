defmodule Solution do
  @spec summary_ranges(nums :: [integer]) :: [String.t()]
  def summary_ranges([]), do: []

  def summary_ranges(nums) do
    nums
    |> Enum.reduce({[], nil, nil}, fn num, {ranges, start, prev} ->
      cond do
        is_nil(start) ->
          {ranges, num, num}

        is_nil(prev) || num - prev > 1 ->
          new_range = format_range(start, prev)
          {[new_range | ranges], num, num}

        true ->
          {ranges, start, num}
      end
    end)
    |> then(fn {ranges, start, last} ->
      [format_range(start, last) | ranges]
    end)
    |> Enum.reverse()
  end

  defp format_range(start, last) when start == last, do: "#{start}"
  defp format_range(start, last), do: "#{start}->#{last}"

  # * AI solved:
  def summary_ranges(nums) do
    nums
    |> find_ranges()
    |> format_ranges()
  end

  # Convert list of numbers into range tuples
  defp find_ranges([]), do: []

  defp find_ranges(nums) do
    nums
    |> Enum.reduce([], fn num, acc ->
      case acc do
        [] ->
          [{num, num}]

        [{start, _end} | rest] when num == _end + 1 ->
          [{start, num} | rest]

        _ ->
          [{num, num} | acc]
      end
    end)
    |> Enum.reverse()
  end

  # Convert range tuples to string representations
  defp format_ranges(ranges) do
    Enum.map(ranges, fn
      {start, end_num} when start == end_num ->
        "#{start}"

      {start, end_num} ->
        "#{start}->#{end_num}"
    end)
  end
end
