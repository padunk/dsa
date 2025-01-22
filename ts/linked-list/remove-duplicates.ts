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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  let temp = head as ListNode | null
  while (temp) {
    if (temp.val === temp.next?.val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }

  return head
}
