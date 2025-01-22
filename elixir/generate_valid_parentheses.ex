defmodule Solution do
  @spec generate_parenthesis(n :: integer) :: [String.t()]
  def generate_parenthesis(n) when n > 0 do
    generate([], "", n, n) |> Enum.reverse()
  end

  defp generate(result, current, 0, 0) do
    [current | result]
  end

  defp generate(result, current, open, close) when open > 0 do
    IO.puts("current: #{current}, open: #{open}, close: #{close}")

    result
    |> generate(current <> "(", open - 1, close)
    |> maybe_close(current, open, close)
  end

  defp generate(result, current, open, close) when open == 0 and close > 0 do
    generate(result, current <> ")", open, close - 1)
  end

  defp maybe_close(result, current, open, close) when close > open do
    generate(result, current <> ")", open, close - 1)
  end

  defp maybe_close(result, _current, _open, _close), do: result
end
