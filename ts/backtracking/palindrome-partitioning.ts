function partition(s: string): string[][] {
  const result: string[][] = []

  function backtrack(start: number, current: string[]) {
    function isPalindrome(start: number, end: number): boolean {
      while (start < end) {
        if (s[start] !== s[end]) return false
        start++
        end--
      }
      return true
    }

    // Base case: if we've processed the entire string
    if (start === s.length) {
      result.push([...current])
      return
    }

    // Try all possible substrings starting from 'start'
    for (let end = start; end < s.length; end++) {
      // If current substring is palindrome, add it and recurse
      if (isPalindrome(start, end)) {
        current.push(s.substring(start, end + 1))
        backtrack(end + 1, current)
        current.pop() // backtrack
      }
    }
  }

  backtrack(0, [])

  return result
}

console.log(partition('cdd')) // ['a', 'a', 'b'] ['aa', 'b']
