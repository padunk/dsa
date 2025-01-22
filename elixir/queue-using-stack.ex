defmodule MyQueue do
  @moduledoc """
  Implementation of a queue using two stacks.
  """

  # Module attribute to store the state
  @state_key :queue_state

  @doc """
  Initialize your data structure here.
  """
  def init_() do
    Process.put(@state_key, {[], []})
  end

  @doc """
  Push element x to the back of queue.
  """
  def push(x) do
    {stack_push, stack_pop} = Process.get(@state_key)
    Process.put(@state_key, {[x | stack_push], stack_pop})
  end

  @doc """
  Removes the element from the front of queue and returns it.
  """
  def pop() do
    {stack_push, stack_pop} = ensure_pop_stack()
    [head | tail] = stack_pop
    Process.put(@state_key, {stack_push, tail})
    head
  end

  @doc """
  Get the front element.
  """
  def peek() do
    {_stack_push, [head | _]} = ensure_pop_stack()
    head
  end

  @doc """
  Returns whether the queue is empty.
  """
  def empty() do
    {stack_push, stack_pop} = Process.get(@state_key)
    stack_push == [] and stack_pop == []
  end

  # Private functions

  defp ensure_pop_stack() do
    {stack_push, stack_pop} = Process.get(@state_key)

    case stack_pop do
      [] ->
        new_pop = Enum.reverse(stack_push)
        Process.put(@state_key, {[], new_pop})
        {[], new_pop}

      _ ->
        {stack_push, stack_pop}
    end
  end
end
