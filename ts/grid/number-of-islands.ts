function numIslands(grid: string[][]): number {
  let islandCount = 0
  const rows = grid.length
  const cols = grid[0].length

  const dfs = (r: number, c: number): void => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
      return
    }

    grid[r][c] = '0' // marked seen

    dfs(r, c + 1)
    dfs(r, c - 1)
    dfs(r + 1, c)
    dfs(r - 1, c)
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        // this is an island, check the edges and marked
        dfs(r, c)
        islandCount++
      }
    }
  }

  return islandCount
}
