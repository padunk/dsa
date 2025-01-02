defmodule Solution do
  @spec cal_points(operations :: [String.t()]) :: integer
  def cal_points(operations) do
    do_operations(operations, [])
  end

  defp do_operations([], record) do
    Enum.sum(record)
  end

  defp do_operations([op | rest], record) do
    case op do
      "+" ->
        prev1 = hd(record)
        prev2 = hd(tl(record))
        r = prev1 + prev2
        new_record = [r | record]
        do_operations(rest, new_record)

      "C" ->
        new_record = tl(record)
        do_operations(rest, new_record)

      "D" ->
        r = hd(record) * 2
        new_record = [r | record]
        do_operations(rest, new_record)

      _ ->
        r = String.to_integer(op)
        new_record = [r | record]
        do_operations(rest, new_record)
    end
  end
end
