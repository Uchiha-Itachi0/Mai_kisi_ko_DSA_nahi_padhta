from LinkedList import LinkedList


# Method 1 Using stack
# Time complexity: O(n)
# Space complexity: O(n)
# Approach : Store all the element of the linked list inside stack. Then
# traverse through the linked list and compare it with the top element of the
# stack up to the mid. If we find any dissimilarity then it is not a palindrome
def palindromeLinkedListStack(head: LinkedList) -> bool:
    if not head:
        return False
    stack, current, length = [], head, 0
    while current:
        stack.append(current.data)
        current = current.next
        length += 1

    mid, i, current = length // 2, 0, head
    while i <= mid:
        if current.data != stack.pop():
            return False
        i += 1
        current = current.next

    return True


# Method 2 Reversing the Half linked list
# Time Complexity : O(n)
# Space Complexity: O(1)

def palindromeLinkedListMethod2(head: LinkedList) -> bool:
    # Find the length of the linked list
    length, current = 0, head
    while current:
        length += 1
        current = current.next

    # Go the the mid point
    i, mid, current = 0, length // 2, head
    while i < mid:
        current = current.next
        i += 1

    # If we don't want to follow the above to step to reach the mid we can
    # simply achieve that by one loop using slow and fast pointer
    # slow = fast = head
    # while fast and fast.next:
    #     fast = fast.next.next
    #     slow = slow.next
    # if fast:
    #     slow = slow.next

    # Reverse the linked list from the mid
    prev, forward = None, None
    while current:
        forward = current.next
        current.next = prev
        prev = current
        current = forward
    # Compare both parts
    current, l, r = head, 0, length - 1
    while r > l:
        if current.data != prev.data:
            return False
        current = current.next
        prev = prev.next
        l += 1
        r -= 1
    return True


# Method 2 Reversing the Half linked list with code optimization
# Time Complexity : O(n)
# Space Complexity: O(1)

def palindromeLinkedList(head: LinkedList) -> bool:
    # go to the mid point reverse it in one loop
    # Going to the mid using fast and slow pointer
    # Reversing is done on the way
    slow, fast = head, head
    prev = None
    while fast and fast.next:
        # Reversing in one line
        fast = fast.next.next
        prev, prev.next, slow = slow, prev, slow.next
    if fast:
        slow = slow.next

    # Comparing
    while prev and prev.data == slow.data:
        prev, slow = prev.next, slow.next
    return not prev


l1 = LinkedList()
l1.linked_list([1])
print(palindromeLinkedList(l1.head))
