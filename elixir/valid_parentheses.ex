defmodule Solution do
  @spec is_valid(s :: String.t()) :: boolean
  def is_valid(s) do
    s
    |> String.graphemes()
    |> Enum.reduce_while([], fn char, stack ->
      case char do
        "(" ->
          {:cont, ["(" | stack]}

        "[" ->
          {:cont, ["[" | stack]}

        "{" ->
          {:cont, ["{" | stack]}

        ")" ->
          case stack do
            ["(" | rest] -> {:cont, rest}
            _ -> {:halt, false}
          end

        "]" ->
          case stack do
            ["[" | rest] -> {:cont, rest}
            _ -> {:halt, false}
          end

        "}" ->
          case stack do
            ["{" | rest] -> {:cont, rest}
            _ -> {:halt, false}
          end

        _ ->
          {:cont, stack}
      end
    end)
    |> case do
      [] -> true
      _ -> false
    end
  end
end
