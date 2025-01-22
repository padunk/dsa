function checkInclusion(s1: string, s2: string): boolean {
  // If s1 is longer than s2, it's impossible to find a permutation
  if (s1.length > s2.length) return false

  // Create frequency maps for characters
  const s1map = new Array(26).fill(0)
  const window = new Array(26).fill(0)

  // Fill frequency map for s1 and initial window of s2
  for (let i = 0; i < s1.length; i++) {
    s1map[s1.charCodeAt(i) - 97]++
    window[s2.charCodeAt(i) - 97]++
  }

  // Check if initial window is a match
  if (matches(s1map, window)) return true

  // Slide the window through s2
  for (let i = s1.length; i < s2.length; i++) {
    // Add new character to window
    window[s2.charCodeAt(i) - 97]++
    // Remove character from start of window
    window[s2.charCodeAt(i - s1.length) - 97]--

    // Check if current window matches
    if (matches(s1map, window)) return true
  }

  return false
}

// Helper function to check if two frequency maps match
function matches(map1: number[], map2: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (map1[i] !== map2[i]) return false
  }
  return true
}

//* MY CODe
// function checkInclusion(s1: string, s2: string): boolean {
//   if (s1.length === s2.length && containsP(s1, s2)) {
//       return true
//   }

//   let containsPerm = false
//   const s1Len = s1.length

//   for(let i = s1Len; i < s2.length+1; i++) {
//       if (containsP(s1, s2.slice(i - s1Len, i))) {
//           containsPerm = true
//           break
//       }
//   }

//   return containsPerm
// };

// function containsP(s1, s2Slice) {
//   const map = s1.split('').reduce((obj, s) => {
//       if (!obj[s]) {
//           obj[s] = 1
//       } else {
//           obj[s] = obj[s] + 1
//       }
//       return obj
//   }, {})

//   s2Slice.split('').forEach(s => {
//       if (map[s]) {
//           map[s] = map[s] - 1
//       }
//   })

//   return Object.values(map).every(m => m === 0)
// }
