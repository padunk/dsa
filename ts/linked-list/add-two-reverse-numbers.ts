/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode()
  let resultCurr = result
  let current1 = l1
  let current2 = l2
  let additional = 0

  while (current1 != null || current2 != null) {
    let sum = 0
    if (current1 == null) {
      sum = current2.val + additional
      current2 = current2.next
    } else if (current2 == null) {
      sum = current1.val + additional
      current1 = current1.next
    } else {
      sum = current1.val + current2.val + additional
      current1 = current1.next
      current2 = current2.next
    }

    if (sum > 9) {
      additional = Math.floor(sum / 10)
      sum %= 10
    } else {
      additional = 0
    }
    resultCurr.val = sum

    if (current1 != null || current2 != null) {
      resultCurr.next = new ListNode()
      resultCurr = resultCurr.next
    }
  }

  if (additional != 0) {
    resultCurr.next = new ListNode()
    resultCurr.next.val = additional
  }

  return result
}
