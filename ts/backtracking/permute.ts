function permute(nums: number[]): number[][] {
  const result: number[][] = []

  function backtrack(permutation: Array<number>, chosen: Array<boolean>): void {
    if (permutation.length === nums.length) {
      result.push(permutation.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (chosen[i]) continue

      chosen[i] = true
      permutation.push(nums[i])

      backtrack(permutation, chosen)

      chosen[i] = false
      permutation.pop()
    }
  }

  backtrack([], [])

  return result
}

console.log(permute([1, 2, 3]))
