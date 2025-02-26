function maxAreaOfIsland(grid: number[][]): number {
  if (!grid || grid.length === 0) {
    return 0
  }

  const rows = grid.length
  const cols = grid[0].length
  let maxArea = 0

  const dfs = (row: number, col: number) => {
    // Base cases:
    // 1. Out of bounds
    // 2. Water cell (0)
    // 3. Already visited (we'll mark visited cells as 0)
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0
    ) {
      return 0
    }

    grid[row][col] = 0

    // Explore the neighbors and sum up their areas
    return (
      1 + // Current cell is part of the island
      dfs(row + 1, col) + // Down
      dfs(row - 1, col) + // Up
      dfs(row, col + 1) + // Right
      dfs(row, col - 1) // Left
    )
  }

  // Iterate through the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j))
      }
    }
  }

  return maxArea
}

function maxAreaOfIslandMe(grid: number[][]): number {
  let maxArea = 0
  const rows = grid.length
  const cols = grid[0].length

  const search = (row: number, col: number): number => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0
    ) {
      return 0
    }

    grid[row][col] = -1 // seen

    // dfs
    return (
      1 +
      search(row + 1, col) +
      search(row - 1, col) +
      search(row, col + 1) +
      search(row, col - 1)
    )
  }

  let i = 0
  do {
    for (let a = 0; a < grid[i].length; a++) {
      if (grid[i][a] === 1) {
        const area = search(i, a)
        maxArea = Math.max(maxArea, area)
      }
    }
    i++
  } while (i < grid.length)

  return maxArea
}
