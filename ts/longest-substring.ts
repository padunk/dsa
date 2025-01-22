function lengthOfLongestSubstring(s: string): number {
  const temp: Array<string> = []
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i])) {
      const idx = temp.indexOf(s[i])
      temp.splice(0, idx + 1)
    }
    temp.push(s[i])
    maxLength = Math.max(maxLength, temp.length)
  }

  return maxLength
}
