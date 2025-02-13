/*
function backtrack(state) {
  // 1. Base Case: When to stop and return a result
  if (isBaseCase(state)) {
      return processSolution(state);
  }

  // 2. Choice: What choices do we have at this step?
  for (let choice of getPossibleChoices(state)) {
      // 3. Recursion: Make choice and continue exploring
      makeChoice(state, choice);
      backtrack(state);
      undoChoice(state, choice);  // This is the "backtracking" part
  }
}
  */

function generateBinaryStrings(n: number): string[] {
  const result: string[] = []

  function backtrack(current: string) {
    // Base case: we have a string of length n
    if (current.length === n) {
      result.push(current)
      return
    }

    // Choices: we can add either '0' or '1'
    backtrack(current + '0') // make choice of '0'
    backtrack(current + '1') // make choice of '1'
  }

  backtrack('')
  return result
}

// Test
console.log(generateBinaryStrings(3))
// Output: ['000', '001', '010', '011', '100', '101', '110', '111']
