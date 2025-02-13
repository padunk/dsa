/*
  Core to backtrack:
  recursive
  simple solution
  base case

  1. make choice
  2. recurse
  3. backtrack
*/

function combinationSums(
  candidates: number[],
  target: number
): Array<Array<number>> {
  const result: number[][] = []

  // Sort candidates for optimization (optional but helps with duplicates)
  candidates.sort((a, b) => a - b)

  function backtrack(
    remaining: number,
    currentCombination: number[],
    startIndex: number
  ): void {
    // Base case: we found a valid combination
    if (remaining === 0) {
      result.push([...currentCombination])
      return
    }

    // Try each candidate from startIndex
    for (let i = startIndex; i < candidates.length; i++) {
      // Skip if this candidate is too large
      if (candidates[i] > remaining) break

      // Include current candidate
      currentCombination.push(candidates[i])

      // Recursively find combinations with current number
      // We pass i (not i + 1) because we can reuse the same number
      backtrack(remaining - candidates[i], currentCombination, i)

      // Backtrack: remove the current candidate to try next one
      currentCombination.pop()
    }
  }

  backtrack(target, [], 0)
  return result
}
