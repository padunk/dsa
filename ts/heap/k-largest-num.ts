class KthLargest {
  k: number
  nums: number[]

  constructor(k: number, nums: number[]) {
    this.k = k
    this.nums = nums.sort((a, b) => a - b)
  }

  add(val: number): number {
    this.insert(val)
    return this.nums[this.nums.length - this.k]
  }

  insert(val: number): void {
    if (val <= this.nums[0]) {
      this.nums = [val, ...this.nums]
      return
    }
    if (val >= this.nums.at(-1)!) {
      this.nums.push(val)
      return
    }

    let lo = 0
    let hi = this.nums.length

    while (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2)
      let v = this.nums[mid]

      if (v === val) {
        lo = mid
        break
      } else if (v > val) {
        hi = mid
      } else {
        lo = mid + 1
      }
    }
    this.nums.splice(lo, 0, val)
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
