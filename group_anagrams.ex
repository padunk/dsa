defmodule Solution do
  @spec group_anagrams(strs :: [String.t()]) :: [[String.t()]]
  def group_anagrams(strs) do
    strs
    |> Enum.reduce(%{}, fn str, acc ->
      key = Enum.sort(String.graphemes(str)) |> Enum.join("")

      Map.update(acc, key, [str], fn curr ->
        [str | curr]
      end)
    end)
    |> Map.values()
  end
end
